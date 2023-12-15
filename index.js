const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3002;
const FormModel = require('./models/formModel');

app.use(cors());
app.use(express.json());

app.post('/api/forms/dynamic', async (req, res) => {
  try {
    const formData = req.body;
    const form = new FormModel(formData);
    await form.save();
    res.json({ message: 'Dynamic form submitted successfully' });
  } catch (error) {
    console.error('Error submitting dynamic form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
