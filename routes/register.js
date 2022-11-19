const express = require('express');
const router = express.Router();
const { registerShow,registerCreate,registerUpdate,registerDelete}= require('../controller/registerController');


router.get('/show',registerShow)
router.post('/create',registerCreate)
router.put('/edit/:id',registerUpdate)
router.delete('/delete/:id',registerDelete)




module.exports = router;


