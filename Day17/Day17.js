const mongoose = require('mongoose');

// Define a Mongoose schema for the User
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true }
});

// Create a Mongoose model for the User schema
const User = mongoose.model('User', userSchema);

// Connect Mongoose to your MongoDB database
mongoose.connect('mongodb://localhost:27017/adithya-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Function to add a new user to the MongoDB database
async function addUserToDatabase(user) {
  try {
    // Create a new User object using the provided user data
    const newUser = new User({
      username: user.username,
      email: user.email
    });

    // Save the user to the database
    await newUser.save();

    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user:', error);
  }
}

// Test the function
addUserToDatabase({ username: 'john_doe', email: 'john@example.com' });
