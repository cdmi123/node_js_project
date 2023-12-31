var usermodel = require('../model/registrationmodel');
var nodemailer = require('nodemailer');

exports.register = async (req,res) => {

    var data = await usermodel.create(req.body);

    if(data) {

        var send_email = data.email;

        var OTP = (Math.floor(100000 + Math.random() * 900000));

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'languagepdf@gmail.com',
              pass: 'affmqdnrzzwapztg'
            }
          });
          
          var mailOptions = {
            from: 'languagepdf@gmail.com',
            to: send_email,
            subject: 'Sending Email using Node.js',
            text: 'Your OTP is: '+OTP
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

    }

    res.status(200).json({
        status: 'success',
        data
    });
}

exports.select = async (req,res)=>{

    var data = await usermodel.find();

    res.status(200).json({
        status: 'success',
        data
    });
}

exports.delete_data = async (req,res)=>{

    var id = req.params.id

    var data = await usermodel.findByIdAndDelete(id);

    res.status(200).json({
        status: 'Data Deleted'
    });
}

exports.update_data = async (req,res)=>{

    var id = req.params.id;

    var data = await usermodel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status: 'Data update'
    });
}