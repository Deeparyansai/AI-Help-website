const express = require('express');
const { registerContoller, loginController, logoutController } = require('../controllers/AuthController');

//router object 
const router = express.Router();

//routes 
router.post('/register' , registerContoller);
router.post('/login' , loginController);
router.post('/logout' , logoutController);

module.exports = router ;

