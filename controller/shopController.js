const Shop = require('../Models/Shop');


const shopShowGet= async(req,res)=>{
    Shop.find((err,data)=>{
        res.send(data)
        console.log(data)
    })
}
const shopPostCreate =async(req,res)=>{
    const shop = new Shop(req.body)
   shop.save((err,data)=>{
    res.json(data)
   })
}
const shopUpdate =async(req,res)=>{
    Shop.find('',(err,data)=>{
        res.send(data)
    })
}

const shopDelete =async(req,res)=>{
    Shop.find('',(err,data)=>{
        res.send(data)
    })
}











module.exports = {
    shopShowGet,
    shopPostCreate,
    shopUpdate,
    shopDelete
}
