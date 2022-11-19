const express = require('express');
const router = express.Router();
const {recipeShow,recipeCreate,recipeUpdate,recipeDelete}=require('../controller/recipeController');



router.get('/show', recipeShow);
router.post('/create',recipeCreate)
router.put('/edit/:id',recipeUpdate);
router.delete('/delete/:id',recipeDelete)





module.exports = router;
