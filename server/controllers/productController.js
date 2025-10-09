import Product from '../models/Product.js';

export const saveproducts = async (req, res) => {
    try {
        const {name,category,price,description,image} = req.body
        const products = new Product({
            name,
            category,
            price,
            description,
            image
        })
        await products.save()
        await res.status(201).json({message:"Data saved successfully"})
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};


const getproducts = async (req,res) =>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        console.error("error",error)
        res.status(500).json({message:"error of products getting"})
    }
}

export default getproducts 

export const getProduct = async (req, res) => {
  try {
    const numericId = Number(req.params.id); // convert to number
    const product = await Product.findOne({ _id: numericId }); // match numeric id

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};
