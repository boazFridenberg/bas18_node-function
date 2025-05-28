const mongoose = require('mongoose');
let express = require('express');
let app = express();
let CurrentProduct = require('./ProductModel');
const uri = "mongodb+srv://david:Aa123456@cluster0.lgrarot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let port = 3000;

app.use(express.json())

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

app.post('/api/v1/products', function(req, res, next) {
      let p1= req.body;
      console.log(req.body)
      let newItem = new CurrentProduct(p1);
      newItem.save().then(item=>{
      res.json({item:item})
  }).catch(err=>{
      console.log("error 😱:" +err)
  });
});

mongoose.connect(uri, clientOptions);
  
app.listen(port)



