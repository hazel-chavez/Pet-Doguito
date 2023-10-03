const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server

// const http = require("http");

// /* El código `const server = http.createServer((req, res) =>{...});` está creando un servidor HTTP
// usando el módulo `http` en Node.js. */
// const server = http.createServer((req, res) =>{
// /* El código `res.writeHead(200, {"Content-Type": "text/plain"});` está configurando el encabezado de
// respuesta HTTP con un código de estado de 200 (que significa "OK") y un tipo de contenido de " Texto
// sin formato". */
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("/screens/registrar_cliente.html");
// }); 

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => console.log("Server is running on port 3000"));