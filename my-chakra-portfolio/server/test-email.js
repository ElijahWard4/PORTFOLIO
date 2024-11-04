// test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

async function sendTestEmail() {
  // Create a transporter using your email service credentials
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // You can change this if you are using a different email provider
    auth: {
      user: process.env.EMAIL_USER, // Your email address from the .env file
      pass: process.env.EMAIL_PASS, // Your email password from the .env file
    },
  });

  // Set up email options
  let mailOptions = {
    from: `"Test" <${process.env.EMAIL_USER}>`, // Sender address
    to: process.env.EMAIL_RECEIVER, // Receiver's email address
    subject: 'Test Email', // Subject line
    text: 'This is a test email from Nodemailer!', // Email body in plain text
  };

  // Send the email and handle the response
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Call the function to send the test email
sendTestEmail();
