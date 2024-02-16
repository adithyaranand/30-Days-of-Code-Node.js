const mongoose = require('mongoose');
function connectToMongoDB() {
  const mongoURI = 'mongodb://localhost/mydatabase';
  mongoose.connect(mongoURI);
  const db = mongoose.connection;
  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  db.once('open', () => {
    console.log('Connected to MongoDB successfully');
  });
}
connectToMongoDB();
