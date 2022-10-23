const express = require('express');
const router = express.Router();

const Forum = require('../Models/Forum');


router.get('/',(req,res)=>{
    Forum.find('title',(err,data)=>{
        res.json(data)
    })


    
});

