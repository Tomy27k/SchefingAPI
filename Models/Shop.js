const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Shop = new Schema({
    product_title:'string',
    product_category:'string',
    product_content:'string',
    product_price:'string',
    product_comment:[{
        author:'string',
        content:'string',
       }],
    product_discount:'string',
    product_stock_piece:'string',
    created_at: Date.now(),


})


module.exports=mongoose.model('Shop',Shop);
