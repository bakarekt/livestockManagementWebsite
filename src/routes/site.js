const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/siteController");

router.use("/", siteController.home);

module.exports = router;