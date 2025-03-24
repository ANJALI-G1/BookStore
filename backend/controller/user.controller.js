//to define function

import User from "../modal/user.modal.js";
import bcrypt from 'bcryptjs'
export const signup=async (req,res)=>{
    try {
        const{ fullname,email,password}=req.body;
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exist"});
        }
        const hashPassword=await bcrypt.hash(password,10);
        const createdUser= await new User({
            fullname,
            email,
            password:hashPassword
        })
        await createdUser.save()
        res.status(201).json({
            message:"User Created Successfully",
            user:{
                _id:createdUser.id,
                fullname:createdUser.fullname,
                email:createdUser.email,
            
            }
        })
    } catch (error) {
        console.log("Error:"+error.message)
        res.status(500).json({message:"Internal server error"})
    }
}
export const login=async (req,res)=>{
    try {
        const {email  , password}=req.body;
        const user=await User.findOne({email});
        if(user==null)  return res.status(400).json({message:"invalid user name or password"});
        
        const isMatch= await bcrypt.compare(password,user.password)
        if(!user|| !isMatch){
            return res.status(400).json({message:"invalid user name or password"});
        }
        return res.status(200).json({
            message:"Login successful",
            user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }
        })
    } catch (error) {
        console.log("Error:"+error.message)
        res.status(500).json({message:"Internal server error"})
    }
}