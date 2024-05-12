
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import {createUser} from './../utils/apis/api.js'
import { useRouter } from "next/navigation.js";

export default function Home() {
  const router = useRouter()
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname]=useState("");
  const [email,setEmail]= useState("");
  const [phoneno,setPhoneno]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
 
 const submitHandler = async(e:any)=>{
    e.preventDefault();
    if (password!=confirmPassword) {
      
    }else{
      const userDTO = {
        firstname: firstname,
        lastname:lastname,
        email:email,
        phoneno:phoneno,
        password:password,
        confirmPassword:confirmPassword
      }
      console.log(userDTO);
      
      const response=await createUser(userDTO)
      console.log(response);
      
      if (response.data.success) {
        router.push('/login')
      }else{
        router.push('/')
      }
      
      // toast.success("account created")
    }
    
 }
  return (
    <main className="bg-stone-200 h-screen flex items-center justify-center">
      <form className="flex flex-col gap-4 bg-white p-5 w-1/3 rounded-lg" onSubmit={submitHandler}>
        <div className="flex justify-center">
          <img
            src="logo.png"
            className="col-span-2 h-20 w-36"
            alt="Cook logo"
          />
        </div>
        <h2 className="text-black">Register</h2>
        <Label htmlFor="Your Name" value="Your Name" className="text-black" />
        <div className="flex">
          <TextInput id="firstName" type="text" placeholder="First Name" required className="border-slate-500 rounded-lg mr-4" onChange={(e) => setFirstname(e.target.value)} />
          <TextInput id="lastName" type="text" placeholder="Last Name" required onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div className="flex mb-2">
          <div className="mr-4">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your Email" className="text-black" />
            </div>
            <div className="flex mb-2">
              <TextInput id="email" type="email" placeholder="name@flowbite.com" required onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phoneNumber" value="Phone Number" className="text-black" />
            </div>
            <div className="flex mb-2">
              <TextInput id="phoneNumber" type="text" placeholder="Phone Number" required onChange={(e) => setPhoneno(e.target.value)}/>
            </div>
          </div>
        </div>


        <div className="flex mb-2">
          <div className="mr-4">
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" className="text-black" />
            </div>
            <div className="flex mb-2">
              <TextInput id="password" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirmPassword" value="Confirm Password" className="text-black" />
            </div>
            <div className="flex mb-2">
              <TextInput id="confirmPassword" type="password" placeholder="Confirm Password" required onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
          </div>
        </div>

        <Button type="submit" className="bg-pink-600 w-32">Create Account</Button>

        <p className="text-black text-center">Already have an account? <a href="/login" className="text-pink-600">Login</a></p>
      </form>
    </main>
  );
}


