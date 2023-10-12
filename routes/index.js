var express = require('express');
var router = express.Router();




var user = require('../controller/registrationcontroller');

router.post('/insert',user.register);

router.get('/',user.select);

router.get('/:id',user.delete_data);

router.post('/update/:id',user.update_data);
router.post('/check_otp',user.check_OTP);




module.exports = router;

