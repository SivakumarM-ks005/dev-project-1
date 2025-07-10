const { getUser } = require("../controller/userController");

const express = require(express);

// routes objects
const router = express.Router();

// get all user list
router.get("/list",getUser);

module.exports = router;