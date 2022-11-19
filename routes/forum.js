const express = require('express');
const router = express.Router();
const {forumShow,forumCreate,forumUpdate,forumDelete}=require('../controller/forumController')



router.get('/show',forumShow);
router.post('/create',forumCreate);
router.put('/edit/:id',forumUpdate);
router.delete('/delete/:id',forumDelete);


module.exports = router;
