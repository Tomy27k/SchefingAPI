const express = require('express');
const router = express.Router();
const Recipe= require('../Models/Recipes')


router.get('/items', function(req, res,) {  
   Recipe.find({recipe: true},(err,data)=>{
    res.json(data)
    console.log(data)
   })
   
   
  
});
// router.post('/recipe-create',(req, res)=>{
//     console.log(req)
    
//     recipe.save((err,data)=>{ 
//         res.json(data)
//     })
// });
router.post('/recipe-create',(req, res)=>{
    console.log(req.body,'dsd')
    const recipe = new Recipe(req.body)

    recipe.save((err,data)=>{
        res.json(data)
        console.log(err , data)
    })
})





module.exports = router;
