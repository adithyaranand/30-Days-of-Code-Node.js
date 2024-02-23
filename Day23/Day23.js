const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  name: String,
  description: String
});
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});
const Category = mongoose.model('Category', categorySchema);
const Product = mongoose.model('Product', productSchema);
async function getProductsPopulatedWithCategory() {
  try {
    const products = await Product.find().populate('category');
    return products;
  } catch (error) {
    console.error('Error retrieving products with populated category:', error);
    return [];
  }
}
async function exampleUsage() {
  await mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
  const electronicsCategory = await Category.create({ name: 'Electronics', description: 'Electronic gadgets' });
  const clothingCategory = await Category.create({ name: 'Clothing', description: 'Clothing items' });
  await Product.create({ name: 'Laptop', price: 999, category: electronicsCategory._id });
  await Product.create({ name: 'T-shirt', price: 20, category: clothingCategory._id });
  const productsWithCategory = await getProductsPopulatedWithCategory();
  console.log(productsWithCategory);
  await mongoose.disconnect();
}
exampleUsage();
