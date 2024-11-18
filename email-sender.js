const nodemailer = require('nodemailer'); // Load the nodemailer module

// Create a transporter for sending the email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ojfair@gmail.com', // Your email here
    pass: 'stunna4vegas', // Your email password here
  },
});

// Email options
const mailOptions = {
  from: 'ojfair@gmail.com', // Sender's email
  to: 'welcometo4vegas@gmail.com', // Recipient's email
  subject: 'Hello from Node.js', // Subject of the email
  text: 'This is a test email sent from Node.js using nodemailer.', // Body of the email
};

// Send the email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Error: ' + err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
