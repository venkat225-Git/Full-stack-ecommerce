import express from 'express'
import postcart, { getcart, getcarts }  from '../controllers/cartController.js'

console.log("✅ Cart route file loaded");


const router = express.Router()

router.post('/cart',postcart)
router.get('/cart',getcarts)
router.get('/cart/:id',getcart)

console.log("✅ Cart route registered");

export default router 