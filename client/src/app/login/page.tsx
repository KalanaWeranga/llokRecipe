
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import jwt from "jsonwebtoken";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/apis/api";
import axios from "axios";
export default function Home() {
  const router = useRouter()
  const [email,setEmail] = useState("");
  const [password,setPassword]=useState("");

  const submitHandler = async(e:any)=>{
    e.preventDefault();
      const userDTO = {
        email:email,
        password:password,
      }
      
      const response=await loginUser(userDTO)
      console.log(response);
      
      
      
      if (response.token) {
        const payload = {
          token : response.token
        }
        const { data } = await axios.post("/api/auth/login",payload);
        alert(JSON.stringify(data.message))
        localStorage.setItem('user', response.userID);
        router.push('/dashboard')
      }else{
        alert(response.message)
        
        router.push('/login')
      }
      
      // toast.success("account created")
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
        <h2 className="text-black">Login</h2>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email address" className="text-black" />
          </div>
          <TextInput id="email1" type="email" placeholder="Email Address" required className="border-slate-500 border-2 rounded-lg mr-4" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Password" className="text-black" />
          </div>
          <TextInput id="password1" type="password" required className="border-slate-500 border-2 rounded-lg mr-4" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <Button type="submit" className="bg-pink-600 w-32">SIGN IN</Button>
        <p className="text-black text-center">Don't have  an account? <a href="/" className="text-pink-600">Create an account</a></p>
      </form>
    </main>
  );
}


