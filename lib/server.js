var express = require('express');
var sass      = require('node-sass-middleware');
var exec    = require("child_process").exec;

var session_id;

module.exports = {
  startServer: function(port, dir){
    dir = dir || process.cwd();
    
    var app = express();

    app.use(sass({
      src: dir + '/',
      dest: dir + '/',
      debug: true,
      outputStyle: 'compressed'
    }));

    /* Serve static assets */
    app.use(express.static(dir));

    /* Listen for requests */
    return app.listen(port);
  }    
};
