var express = require('express');
var emberServer = require('../server/index.js');

console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir(__dirname + '/../dist');
  console.log(`New directory: ${process.cwd()}`);
}
catch (err) {
  console.log(`chdir: ${err}`);
}

var app = express();
emberServer(app);
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express Server - listening on port: ' + port);

