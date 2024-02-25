const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
});
const Product = mongoose.model('Product', productSchema);
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
function createProductNameIndex() {
  Product.createIndex({ name: 1 }, (err, result) => {
    if (err) {
      console.error("Error creating index:", err);
    } else {
      console.log("Index created successfully:", result);
    }
  });
}
createProductNameIndex();
