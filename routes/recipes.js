const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Recipe= require('../Models/Recipes')


router.get('/', function(req, res, next) {  
    const recipe = new Recipe({
        title: 'kitaplar',
        content: 'nasil yemek yapilir ',
        desription:{
            time: '30 minutes',
            piece: 3,

        }
    })
    recipe.save((err,data)=>{
        res.json(data)
    })
});




module.exports = router;
