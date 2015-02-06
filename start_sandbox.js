var server = require('./lib/server.js');

var port = process.env.PORT || 3000;

var proc = server.startServer(port, __dirname+"/src", true);

process.on('SIGTERM', function(){
  proc.close();
});
