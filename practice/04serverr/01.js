let http = require("http");

let serverFunction = function(req, res) {
    res.write("Hello World!");
    res.end();
}

let httpServer = http.createServer(serverFunction);

httpServer.listen(3000);
console.log("Server is running on port 3000");
// http://localhost:3000