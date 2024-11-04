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

  // Create a Nodemailer transporter using your email service
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use Gmail or another service
    auth: {
      user: process.env.EMAIL_USER, // Your email address from env file
      pass: process.env.EMAIL_PASS, // Your email password from env file
    },
  });

  // Email options
  let mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // Sender address
    to: process.env.EMAIL_RECEIVER, // Receiver's email address
    subject: 'New Contact Form Message', // Subject line
    text: `You have a new message from ${name} (${email}):\n\n${message}`, // Plain text body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
