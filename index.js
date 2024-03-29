const express = require('express');
const http = require('http');
const bodyParser = require("body-parser");

const dishRouter = require("./Routes/dishRouter");
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(bodyParser.json());

app.use('/dishes', dishRouter);

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});