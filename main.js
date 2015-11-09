var   tools = require("./util");
var   fs = require("fs");
var   http = require("http");
tools.init();

var yang = {
 
 
	test : function(){
		alert("3333");
      },
 
	say : function(){
		alert("i am new Master master");
 
	}
};

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('asdfads World\n');
}).listen(8888);