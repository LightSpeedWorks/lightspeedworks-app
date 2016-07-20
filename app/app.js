const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
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

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
