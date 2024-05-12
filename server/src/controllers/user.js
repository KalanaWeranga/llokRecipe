import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserModel } from '../models/User.js';

const userRegister = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {firstname,lastname,email,phoneno,password,confirmPassword}=req.body
    const user = await UserModel.findOne({firstname,lastname})
    const emailUser = await UserModel.findOne({email})
    const phone = await UserModel.findOne({phoneno})

    if (user) {
        return res.json({message:'User Already Exists',success:false})
    }
    else if (emailUser) {
        return res.json({message:'Your Entered Email Already Exists',success:false})
    }
    else if (phone) {
        return res.json({message:'Your Entered Phone No Already Exists',success:false})
    }
    else {
        if (password!=confirmPassword) {
            return res.json({message:'Did not match password and confirm password',success:false}) 
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new UserModel({firstname,lastname,email,phoneno,password:hashedPassword})
        await newUser.save()
        res.json({message:'user registered successfully',success:true})
    }
})

const userLogin = asyncHandler(async(req,res)=>{
    const MAX_AGE = 60*60*24*30
    const {email,password}=req.body
    const user = await UserModel.findOne({email})

    if (!user) {
        return res.json({message:"User Doesn't Exists",success:false})
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)

    if (!isPasswordValid) {
        return res.json({message:"Email or Password Invalid",success:false})
    }

    const token = jwt.sign({id:user._id},"secret",{expiresIn:MAX_AGE})
    res.json({token,userID:user._id})

})

export {userRegister,userLogin}