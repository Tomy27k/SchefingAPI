const express = require('express');
const router = express.Router();
const Recipe= require('../Models/Recipes')


router.get('/show', function(req, res,) {  
   Recipe.find({recipe: true},(err,data)=>{
    res.json(data)
    console.log(data)
   })
   
   
  
});
router.put('/edit/:id',(req, res)=>{
    console.log(req)
    
    recipe.save((err,data)=>{ 
        res.json(data)
    })
});
router.post('/create',(req, res)=>{
    console.log(req.body,'dsdsds')
    const recipe = new Recipe(req.body)

    recipe.save((err,data)=>{
        res.json(data)
        console.log(err , data);
    })
})
router.delete('/delete/:id',(req,res)=>{
    
})





module.exports = router;
