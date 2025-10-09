import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypyt from 'bcrypt'

const connectuser = async(req,res)=>{
    try {
        const{name, email, password} = req.body
        const hashedpassword = await bcrypyt.hash(password,10)
        const user = new User({
            name,
            email,
            password : hashedpassword
        })
        await user.save()
        await res.status(201).json({message:"Data saved successfully"})

    } catch (error) {
        console.error(error,"error")
    }
}

export default connectuser 