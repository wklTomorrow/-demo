var server = require("./serve");
var router = require("./router");
 
server.start(router.route);