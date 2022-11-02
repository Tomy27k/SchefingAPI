const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Shop = new Schema({
    product_title:'string',
    product_category:'string',
    product_content:'string',
    product_price:'number',
    product_image:{
        data: Buffer,
        contentType: String
    },
    product_comment:[{
        author:'string',
        content:'string',
       }],
    product_discount:'number',
    product_stock_piece:'number',
    created_at:{
        type:'date',
        default: Date.now(),
    },


})


module.exports=mongoose.model('Shop',Shop);
