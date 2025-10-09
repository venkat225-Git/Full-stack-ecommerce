import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({

  productId: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
});

export default mongoose.model("Cart", cartSchema);
