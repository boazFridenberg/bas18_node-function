let express = require("express")
let app = express()
let port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
    res.json({message: "hello"})
})

app.get("/about", (req, res) => {
    res.json({message: "yair"})
})

app.post('/', function (req, res) {
    res.json({message: "we support post request"})
    });

app.post('/add', function (req, res) {
    console.log(req.body)
    res.json({message: "we support post request"})
    });

    app.post('/person/:id/:name', function (req, res) {
        console.log(req.params.id)
        console.log(req.params.name)

        res.json({message: "we support post request"})
        });
    

app.listen(port);
//http://localhost:3000

