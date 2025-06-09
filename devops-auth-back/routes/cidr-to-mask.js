const express = require("express");
const authenticateToken = require("../middleware/authentication");
const { cidrToMask } = require("../controllers/cidr-to-maskController");

const router = express.Router();

router.get("/", authenticateToken, cidrToMask);

module.exports = router;
