const express = require('express');
const router = express.Router();
const About =require('../Models/About');



router.get('/show',(req,res)=>{
    About.find('',(err,data)=>{
        console.error(err,  'About routes get error message')
        res.json(data);
    })
});
router.post('/create',(req,res)=>{
    const about = new About(req.body)

    about.save((err,data)=>{
        res.json(data);
    })
});
router.put('/update/:id',(req,res)=>{
    
})
router.delete('/delete/:id',(req,res)=>{

})

module.exports = router; 
