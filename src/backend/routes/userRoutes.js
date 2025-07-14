const { getUser } = require("../controller/userController");
const express = require("express");
//routes

// routes objects
const router = express.Router();

// get all user list
router.get('/getall', getUser);

module.exports = router;