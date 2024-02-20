const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); 
const app = express();
mongoose.connect('mongodb://localhost:27017/adithya-db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
async function averageAgeOfUsers(req, res) {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" }
        }
      }
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    const averageAge = result[0].averageAge;
    res.json({ averageAge });
  } catch (error) {
    console.error('Error calculating average age:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Route
app.get('/average-age', averageAgeOfUsers);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
