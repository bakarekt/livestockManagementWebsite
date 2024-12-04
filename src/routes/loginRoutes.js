const express = require("express");
const router = express.Router();

const loginController = require("../app/controllers/loginController");

router.use("/", loginController.login);

module.exports = router;
