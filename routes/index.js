var express = require('express');
var router = express.Router();
const multer = require('multer');

/* image upload */

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })

/* end image upload */


var user = require('../controller/registrationcontroller');

router.post('/insert', upload.single('image'),user.register);

router.get('/',user.select);

router.get('/:id',user.delete_data);

router.post('/update/:id',user.update_data);
router.post('/check_otp',user.check_OTP);




module.exports = router;

