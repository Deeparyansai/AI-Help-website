const express = require('express');
const { summaryController, chatbotController, jsconverterController } = require('../controllers/OpenaiController');

//router object
const router = express.Router();

//routes 
router.post("/summary", summaryController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);


module.exports = router ;
