const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Invalid email format'
    }
  }
});
const User = mongoose.model('User', userSchema);

/**
 * Adds a new user to the MongoDB database with validation
 * @param {Object} user - User object with properties username and email
 */
function addUserWithValidation(user) {
  const newUser = new User(user);
  newUser.save(function(err) {
    if (err) {
      console.error("Error adding user:", err.message);
    } else {
      console.log("User added successfully");
    }
  });
}
addUserWithValidation({ username: 'john_doe', email: 'invalid-email' });
