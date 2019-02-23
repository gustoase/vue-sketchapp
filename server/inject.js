const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { rollup } = require('rollup');


const url = 'http://localhost:8080';
const plugin_file = '../src/my-command.js';
const debug = true;

const symbolLayerMiddleware = function (){}; //resolveMiddleware(argv.symbolLayerMiddleware);
const symbolMiddleware = function (){}; //resolveMiddleware(argv.symbolMiddleware);
const symbolInstanceMiddleware = function (){}; //resolveMiddleware(argv.symbolInstanceMiddleware);

console.log('start compile');

puppeteer.launch({headless: true}).then(async browser => {
  const page = await browser.newPage();

  if (debug) {
    page.bringToFront();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  }

  await page.goto(url);

  const bundle = await rollup({
    input: path.resolve(__dirname, './page2layers.js'),
    plugins: [
      require('rollup-plugin-node-resolve')(),
      require('rollup-plugin-commonjs')()
    ]
  });

  const { code } = await bundle.generate({
    format: 'iife',
    name: 'generateAlmostSketch'
  });

  await page.addScriptTag({ content: code });

  await page.evaluate('generateAlmostSketch.setupSymbols({ name: "Symbols lib" })');

  await page.evaluate('generateAlmostSketch.snapshotColorStyles()');

  const viewports = { Desktop: '1024x768' };
  const hasViewports = Object.keys(viewports).length > 1;
  for (const viewportName in viewports) {
    if (viewports.hasOwnProperty(viewportName)) {
      const viewport = viewports[viewportName];
      const [ size, scale ] = viewport.split('@');
      const [ width, height ] = size.split('x').map(x => parseInt(x, 10));
      const deviceScaleFactor = typeof scale === 'undefined' ? 1 : parseFloat(scale);
      await page.setViewport({ width, height, deviceScaleFactor });
      await page.evaluate(`generateAlmostSketch.snapshotTextStyles({ suffix: "${hasViewports ? `/${viewportName}` : ''}" })`);
      await page.evaluate(`generateAlmostSketch.snapshotSymbols({ suffix: "${hasViewports ? `/${viewportName}` : ''}", symbolLayerMiddleware: ${symbolLayerMiddleware}, symbolMiddleware: ${symbolMiddleware}, symbolInstanceMiddleware: ${symbolInstanceMiddleware}  })`);
    }
  }

  const document_json = await page.evaluate('generateAlmostSketch.getDocumentJSON()');
  const page_json = await page.evaluate('generateAlmostSketch.getPageJSON()');

  let str = "import asketch2sketch from '@brainly/html-sketchapp/asketch2sketch/asketch2sketch';\n" +
      "export default function (context) {asketch2sketch(context, json)}\n" +
      "\n"
      +'let json = [' +
      page_json + ',' + document_json +
      ']';

  fs.writeFileSync(path.resolve(__dirname, plugin_file), str);


  browser.close();

  console.log('end compile');
});

