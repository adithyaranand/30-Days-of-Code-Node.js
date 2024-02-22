const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});
const Product = mongoose.model('Product', productSchema);
async function createProduct(product) {
  try {
    return await Product.create(product);
  } catch (error) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
}
async function getAllProducts() {
  try {
    return await Product.find();
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}
async function updateProduct(productId, updatedProduct) {
  try {
    const product = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (error) {
    throw new Error(`Failed to update product: ${error.message}`);
  }
}
async function deleteProduct(productId) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      throw new Error('Product not found');
    }
    return 'Product deleted successfully';
  } catch (error) {
    throw new Error(`Failed to delete product: ${error.message}`);
  }
}

module.exports = { createProduct, getAllProducts, updateProduct, deleteProduct };
