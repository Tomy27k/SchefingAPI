const express = require("express");
const router = express.Router();
const {aboutShow,aboutCreate,aboutUpdate,aboutDelete} =require('../controller/aboutController')


router.get("/show", aboutShow);
router.post("/create", aboutCreate);
router.put("/update/:id",  aboutUpdate);
router.delete("/delete/:id", aboutDelete);

module.exports = router;
