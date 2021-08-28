const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hola Mundo");
  res.end();
});

server.listen(8080);

console.log("Escuchando en el puerto 8080");
