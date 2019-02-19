const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outputFile = '../page.asketch.json';
const plugin_file = '../src/my-command.js';
const vue_app_url = 'http://localhost:8080/';

console.log('run compile');
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();

  await page.setViewport({width: 1280, height: 1200});
  await page.goto(vue_app_url, {
    waitUntil: 'networkidle2'
  });

  await page.addScriptTag({
    path: path.resolve(__dirname, '../dist/build/page2layers.bundle.js')
  });

  // JSON.parse + JSON.stringify hack is only needed until
  // https://github.com/GoogleChrome/puppeteer/issues/1510 is fixed
  const asketchPageJSONString = await page.evaluate(
      'JSON.stringify(page2layers.run())'
  );

  let str = "import asketch2sketch from '@brainly/html-sketchapp/asketch2sketch/asketch2sketch';\n" +
      "export default function (context) {asketch2sketch(context, [json])}\n" +
      "\n"
      +'let json = '+asketchPageJSONString;

  fs.writeFileSync(path.resolve(__dirname, plugin_file), str);


  browser.close();

  console.log('end compile');
});

