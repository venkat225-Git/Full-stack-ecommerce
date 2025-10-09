import cart from "../models/cart.js";
import Cart from "../models/cart.js";
import Product from "../models/Product.js";


const postcart = async (req, res) => {
  try {
    const { productId } = req.body; 

    const user = await Product.findOne({ _id: productId});

    if (!productId) {
      return res.status(404).json({ message: "product not found" });
    }

    const quantity = 1; 

    const newcart = new Cart({
      productId,
      quantity,
    });

    await newcart.save();
    res.status(201).json({ message: "Product added to cart", newcart });
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart", error });
  }
};

export default postcart 


export const getcart = async(req,res) =>{
  try {
  
    const cartt = await Cart.findOne({ productId: req.params.id });

    if (!cartt) {
      return res.status(404).json({ message: "cart not found" });
    }

    const gettin = await Product.findOne({_id:cartt.productId})

    if (!gettin) {
      return res.status(404).json({ message: "product_not_found" });
    }
    res.status(200).json(gettin);

  } catch (error) {
    res.status(500).json({ message: "Error getting cart", error });
  }
}

export const getcarts = async (req,res) => {
  try {
    const cartts = await Cart.find()

    const productIds = cartts.map((item)=>item.productId)

    const filteredcart = await Product.find({ _id: { $in: productIds } })
    res.status(200).json(filteredcart)

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}
