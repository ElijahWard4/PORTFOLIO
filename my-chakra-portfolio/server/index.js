
// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5001;

// // Middleware
// app.use(cors()); // Allow requests from your frontend
// app.use(express.json()); // Parse JSON bodies

// // Route to handle email sending
// app.post('/send-email', async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   // Create a Nodemailer transporter using your email service
//   let transporter = nodemailer.createTransport({
//     service: 'Gmail', // You can use Gmail or another service
//     auth: {
//       user: process.env.EMAIL_USER, // Your email address from env file
//       pass: process.env.EMAIL_PASS, // Your email password from env file
//     },
//   });

//   // Email options
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.RECIPIENT_EMAIL, // Set this to your email or pass it dynamically
//     subject: 'Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//   };

//   // Send email
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.response);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Allow requests from your frontend
app.use(express.json()); // Parse JSON bodies

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../dist'))); // Adjust the path if your build folder name is 'dist'

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create a Nodemailer transporter using your email service
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use Gmail or another service
    auth: {
      user: process.env.EMAIL_USER, // Your email address from env file
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password from env file
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL, // Set this to your email or pass it dynamically
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html')); // Adjust the path if your build folder name is 'dist'
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
































//   // Create a Nodemailer transporter using your email service
//   let transporter = nodemailer.createTransport({
//     service: 'Gmail', // You can use Gmail or another service
//     auth: {
//       user: process.env.EMAIL_USER, // Your email address from env file
//       pass: process.env.EMAIL_PASS, // Your email password from env file
//     },
//   });

//   // Email options
//   let mailOptions = {
//     from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // Sender address
//     to: process.env.EMAIL_RECEIVER, // Receiver's email address
//     subject: 'New Contact Form Message', // Subject line
//     text: `You have a new message from ${name} (${email}):\n\n${message}`, // Plain text body
//   };

//   try {
//     // Send the email
//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({ message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return res.status(500).json({ error: 'Failed to send email' });
//   }
// });