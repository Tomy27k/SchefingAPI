const express = requre('express');
const router = express.Router();
const Register = require('../Model/Register.js')



router.get('/show',(req,res)=>{
    Register.find('',(err,data)=>{
        res.json(data)
        console.error(err);
    })

})




module.exports = router;


