import express from 'express';
import connectuser from "../controllers/userController.js";

const router = express.Router()


router.post('/user',connectuser)

export default router 