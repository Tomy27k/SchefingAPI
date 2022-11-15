const express = require('express')
const router = express.Router();
const {shopShowGet,shopPostCreate,shopUpdate,shopDelete} = require('../controller/shopController');

router.get('/show',shopShowGet);
router.post('/product/create',shopPostCreate);
router.put('/product/edit/:id',shopUpdate);
router.delete('/product/delete/:id',shopDelete);





module.exports = router;




