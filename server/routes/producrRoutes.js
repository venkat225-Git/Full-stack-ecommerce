import express from 'express';
import saveproducts, { getProduct } from '../controllers/productController.js';
import getproducts from '../controllers/productController.js';



const router = express.Router();


router.post('/products', saveproducts);
router.get("/products",getproducts)
router.get('/products/:id',getProduct)

export default router; 