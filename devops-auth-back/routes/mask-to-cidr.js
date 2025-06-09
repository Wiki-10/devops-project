const express = require("express");
const authenticateToken = require("../middleware/authentication");
const { maskToCidr } = require("../controllers/mask-to-cidrController");

const router = express.Router();

router.get("/", authenticateToken, maskToCidr);

module.exports = router;
