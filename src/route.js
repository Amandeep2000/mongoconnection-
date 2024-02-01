
const express = require('express');
const router = express.Router();


const AuthController=require('./controller/AurthController')



router.post('/singup',AuthController.signup);
module.exports = router;


