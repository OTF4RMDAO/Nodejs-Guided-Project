const http = require('http'); // This loads the HTTP module

const server = http.createServer((req, res) => {
  res.write('<h1>Hello Node!!!!</h1>\n');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
