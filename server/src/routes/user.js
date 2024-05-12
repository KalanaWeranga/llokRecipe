import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { userRegister,userLogin } from '../controllers/user.js'

const router = express.Router()

router.post("/register",userRegister)
router.post("/login",userLogin)




export {router as userRouter}