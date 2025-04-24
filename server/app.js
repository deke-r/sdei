const express=require('express');
const app=express();
const bodyParser=require('body-parser');
require('dotenv').config();
const nodemailer = require('nodemailer');
const cors=require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())


// Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for port 465
    auth: {
      user: process.env.MAILID,
      pass: process.env.MAILPASS
    }
  });


const router=express.Router()

router.get('/', (req, res) => {
    res.send('✅ SDEI Backend Server is up and running successfully. Welcome to the API root endpoint.');
  });
  

  router.post('/contact-form-data', async (req, res) => {
    try {
      const { name, email, mobile, message } = req.body;
  
      if (!name || !email || !mobile || !message) {
        return res.status(400).json({
          success: false,
          message: 'Please fill in all required fields.'
        });
      }

      const recipients = [
        'senseprojects@yahoo.com',
        'senseprojects2019@gmail.com',
        'info@senseprojects.in'
    ];
  
      const mailOptions = {
        from: process.env.MAILID,
        to: recipients,
        subject: 'New Contact Form Submission',
        html: `
          <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333; margin: 0; padding: 0;">
            <div style="background-color: #134377; color: #fff; padding: 20px; text-align: center;">
              <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
              <p style="margin: 0;">You have a new message from the SDEI website.</p>
            </div>
            <div style="padding: 20px;">
              <table cellspacing="0" cellpadding="10" border="1" style="border-collapse: collapse; width: 100%; max-width: 600px; margin: 20px auto; border: 1px solid #ddd;">
                <tr style="background-color: #f2f2f2;">
                  <td style="font-weight: bold; color: #0d141f;">Name</td>
                  <td>${name}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                  <td style="font-weight: bold; color: #0d141f;">Email</td>
                  <td>${email}</td>
                </tr>
                <tr style="background-color: #f2f2f2;">
                  <td style="font-weight: bold; color: #0d141f;">Mobile</td>
                  <td>${mobile}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                  <td style="font-weight: bold; color: #0d141f;">Message</td>
                  <td>${message}</td>
                </tr>
              </table>
            </div>
            <div style="background-color: #f2f2f2; padding: 10px; text-align: center; font-size: 12px; color: #555;">
              <p style="margin: 0;">This email was sent from the <strong>SDEI website</strong>.</p>
            </div>
          </div>
        `
      };
      
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
  
      return res.status(200).json({
        success: true,
        message: 'Email sent successfully!',
        messageId: info.messageId
      });
  
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while sending the email. Please try again later.',
        error: error.message
      });
    }
  });
  


app.use('/',router)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`);    
})