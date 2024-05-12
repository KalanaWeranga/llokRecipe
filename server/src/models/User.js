import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstname :{type:String, required: true},
    lastname:{type:String},
    email : {type:String, required: true, unique:true},
    phoneno : {type:String, required: true, unique:true},
    password : {type:String, required: true, unique:true},
})

export const UserModel =mongoose.model("users",UserSchema)