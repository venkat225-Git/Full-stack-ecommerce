import User from "../models/user.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "required email" });
    }
    if (!password) {
      return res.status(400).json({ message: "required password" });
    }

    const user = await User.findOne({ email });

    const ispassword = await bcrypt.compare(password,user.password)

    if(user&&ispassword){
        res.status(201).json({message:"this is sucess"})
    }else{
        res.status(400).json({message:"not matching"})
    }


  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export default login;
