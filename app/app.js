'use strict';

try {
	console.log('app.js starting...');

	const http = require('http');

	const port = process.env.PORT || 3000;
	console.log('port ', port);

	const server = http.createServer(function (req, res) {
		console.log(req.method, req.url);
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		//res.end('Hello World\n');

		res.end(['Hello World',
			'__dirname = ' + __dirname,
			'__filename = ' + __filename,
			'process.cwd() = ' + process.cwd(),
			'process.version = ' + process.version,
		].join('\n'));

	});

	server.listen(port, function () {
		console.log('Server running at http://localhost:' + port + '/');
	});

	console.log('app started.');
}
catch (e) {
	console.warn(e);
	console.error(e.stack);
}
