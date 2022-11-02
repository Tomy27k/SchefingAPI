const express = require('express')
const router = express.Router();
const Shop = require('../Models/Shop')

router.get('/show',(req,res)=>{
    Shop.find((err,data)=>{
        res.send(data)
        console.log(data)
    })
});
router.post('/product/create',(req,res)=>{
   const shop = new Shop(req.body)
   shop.save((err,data)=>{
    res.json(data)
   })
   console.log(shop)
});
router.put('/product/edit/:id',(req,res)=>{
    Shop.find('',(err,data)=>{
        res.send(data)
    })
});
router.delete('/product/delete/:id',(req,res)=>{
    Shop.find('',(err,data)=>{
        res.send(data)
    })
});





module.exports = router;




