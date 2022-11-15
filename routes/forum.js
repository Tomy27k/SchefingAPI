const express = require('express');
const router = express.Router();

const Forum = require('../Models/Forum');


router.get('/',async(req,res)=>{
    Forum.find('title',(err,data)=>{
        res.json(data)
    })
    try{
        
    }
    catch(err){
        console.log(err);
    }




    
});

