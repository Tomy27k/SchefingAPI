const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


router.get('/', function(req, res, next) {  
    console.log(res,req)
});




module.exports = router;
