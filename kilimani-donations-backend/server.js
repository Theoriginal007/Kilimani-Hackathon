// server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Donation endpoint
app.post('/donate', async (req, res) => {
  const { phoneNumber, amount } = req.body;

  try {
    // Simulate payment processing
    const paymentResponse = await axios.post('https://api.paystack.co/transaction/initialize', {
      email: 'user@example.com', // Replace with actual user email
      amount: amount * 100, // Convert to kobo for Paystack
    }, {
      headers: {
        'Authorization': `Bearer YOUR_PAYSTACK_SECRET_KEY`,
        'Content-Type': 'application/json',
      },
    });

    const { data } = paymentResponse;
    console.log('Payment response:', data);

    // Return a response to the client
    res.json({ message: 'Payment initiated successfully', data });
  } catch (error) {
    console.error('Error processing donation:', error);
    res.status(500).json({ error: 'Error processing donation' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
