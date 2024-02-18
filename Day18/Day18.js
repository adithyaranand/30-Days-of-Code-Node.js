const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming User model is defined in models/User.js
const app = express();
const PORT = 3000;
mongoose.connect('mongodb://localhost:27017/adithya-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err);
});
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
