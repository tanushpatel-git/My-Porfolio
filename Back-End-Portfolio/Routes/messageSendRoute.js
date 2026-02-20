const express = require("express");
const messageSendController = require("../Controller/messageController");
const router = express.Router();



router.post("/send", messageSendController);



module.exports = router;