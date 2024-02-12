const express = require('express');
const authenticationMiddleware = require('./authenticationMiddleware'); // Corrected path

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Day 11 Complete!');
});

// Protected route
app.get('/protected', authenticationMiddleware, (req, res) => {
  res.send('Protected Route');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
