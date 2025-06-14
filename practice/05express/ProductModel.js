let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ProductSchema = new Schema({
    title: {
        type:String,
        require:[true,'A product must have title' ],
        unique:true,
        trim:true
    },
    description:{
        type:String,
        minlength:[5,'Description is minimum 20 characters'],
        maxlength:[1000,'Description is maximum 1000 characters']
    },
    price:{
        type:Number,
        required:[true, 'A product must have price'],
        min:[0,'price must be above 0'],
        max:[10000,'price must be below 10000']
    },
});
module.exports = mongoose.model('product', ProductSchema);