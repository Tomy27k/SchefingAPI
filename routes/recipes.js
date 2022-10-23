const express = require('express');
const router = express.Router();
const Recipe= require('../Models/Recipes')


router.get('/items', function(req, res,) {  
   Recipe.find({recipe: true},(err,data)=>{
    res.json(data)
    console.log(data)
   })
   
   
  
});
router.post('/item-add',(req, res)=>{
    const recipe = new Recipe({
        title: 'kitap',
        content: 'nasil yemek yapildi ',
        contednt: 'nasil yemek dddyapildi ',
        recipe: true,
        description:{
            time: '30 minutes',
            piece: 3,

        }
    })
    recipe.save((err,data)=>{ 
        res.json(data)
    })
})





module.exports = router;
