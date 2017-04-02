var path = require('path');
var fs   = require('fs');

function static (options) {
  return function (req, res, next) {
    var assetPath;
    if (!path.extname(req.path)) {
      return next();
    }
    if (options.directory) {
      assetPath = path.join(options.directory, req.path);
    } else if (options.file) {
      assetPath = options.file;
    } else {
      throw new Error('static() isn\'t properly configured!');
    }

    if (!assetPath) { return next(); }
    fs.stat(assetPath, function (statError, stats) {
      if (statError) { return next(); }

      res.sendFile(process.cwd() + '/' + assetPath, function (sendError) {
        if (sendError) { return next(); }

        console.log('Served: ' + process.cwd() + '/' + assetPath);
      });
    });
  };
}

module.exports = function (app) {
  console.log('-------- EMBER RUNNING ----------------');
  app.use(static({ directory: 'dist' }));
  app.use(function serveIndex(req, res, next) {
    // ignore live reload and tests
    if (req.url === '/ember-cli-live-reload.js' || req.url.indexOf('tests') > 0) {
      return next();
    }
    var assetPath = 'index.html';
    // send file without modification
    // res.status(200).sendFile(process.cwd() + '/index.html');

    // send file with modification
    fs.readFile(process.cwd() + '/' + assetPath, { encoding: 'utf8' }, function(err, data) {
      console.log('-------- Severing Data ------------');
      res.status(200).send(data);
    });
  });
};

