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

// // Create the transporter with a dynamic service
// const transporter = nodemailer.createTransport({
//     service: process.env.EMAIL_SERVICE, // e.g., 'gmail', 'outlook', etc.
//     host: process.env.EMAIL_HOST || undefined, // Optional: Specify host if needed
//     port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : undefined, // Optional: Specify port if needed
//     secure: process.env.EMAIL_SECURE === 'true', // Set to true for SSL (port 465), false for other ports
//     auth: {
//       user: process.env.EMAIL_USER, // Your email address
//       pass: process.env.EMAIL_PASS, // Your email password or app-specific password
//     },
//   });
  
//   // Example email options
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: 'recipient@example.com',
//     subject: 'Test Email',
//     text: 'This is a test email sent from your Nodemailer setup!',
//   };
  
//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   })});


// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// //   console.log(`portfolio is running on port ${PORT}`);
// });

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Allow requests from your frontend
app.use(express.json()); // Parse JSON bodies

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create the transporter
//   const transporter = nodemailer.createTransport({
//     // service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
//     host: 'smtp.gmail.com', // Only needed if not using `service: 'gmail'`
//   port: 465, // Use 465 for SSL or 587 for TLS
//   secure: true, // true for port 465, false for port 587
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   });

  // Create a Nodemailer transporter using your email service
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use Gmail or another service
    auth: {
      user: process.env.EMAIL_USER, // Your email address from env file
      pass: process.env.EMAIL_PASS, // Your email password from env file
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