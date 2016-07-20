'use strict';

try {
	console.log('app.js starting...');

	const http = require('http');

	const hostname = '127.0.0.1';
	const port = process.env.PORT || 3000;

	const server = http.createServer(function (req, res) {
		console.log(req.method, req.url);
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello World\n');
	/*
		res.end(['Hello World',
			'__dirname = ' + __dirname,
			'__filename = ' + __filename,
			'process.cwd() = ' + process.cwd(),
		].join('\n'));
	*/
	});

	server.listen(port, hostname, function () {
		console.log('Server running at http://' + hostname + ':' + port + '/');
	});
}
catch (e) {
	console.warn(e);
	console.error(e.stack);
}
