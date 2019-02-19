const spawn = require('child_process').spawn;
const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('convert vue to sketch', (compilation) => {
            var workerProcess = spawn('node', [path.resolve(__dirname, '../server/inject.js')]);

            workerProcess.stdout.on('data', function (data) {
              console.log('stdout: ' + data);
            });

            workerProcess.stderr.on('data', function (data) {
              console.log('stderr: ' + data);
            });

            workerProcess.on('close', function (code) {
              console.log('child process exited with code ' + code);
            });

          });
        }
      }
    ]
  }
}
