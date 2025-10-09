// models/productModel.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  _id:{
    type:Number,
    required:true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  image:{
    type: String
  }
});


const Product = mongoose.model('Product', productSchema);

export default Product;
