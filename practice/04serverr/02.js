let http = require("http");

let serverFunction = function (req, res) {
    console.log(req.url);
    if (req.url === "/") {
        res.write("Hello World!");
        res.end();
    }
    else if (req.url === "/about") {
        res.write("About Page");
        res.end();
    }
    else if (req.url === "/contact") {
        res.write("Contact Page");
        res.end();
    }
    else {
        res.write("404 Not Found");
        res.end();
    }
    
}

let httpServer = http.createServer(serverFunction);

httpServer.listen(3001);
console.log("Server is running on port 3001");
// http://localhost:3001/contact