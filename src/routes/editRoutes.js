const express = require("express");
const router = express.Router();

const editController = require("../app/controllers/EditController");

router.use("/:slug", editController.show);
router.use("/", editController.edit);

module.exports = router;
