const express = require("express");
const router = express.Router();

const searchController = require("../app/controllers/searchController");

router.use("/", searchController.search);

module.exports = router;
