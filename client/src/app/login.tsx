
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Home() {
  return (
    <main className="bg-stone-200 h-screen flex items-center justify-center">
    <form className="flex flex-col gap-4 bg-white p-5 w-1/3 rounded-lg">
    <div className="flex justify-center">
  <img
    src="logo.png"
    className="col-span-2 h-20 w-36"
    alt="Cook logo"
  />
</div>
      <h2 className="text-black">Register</h2>
          <Label htmlFor="Your Name" value="Your Name" className="text-black"/>
        <div className="flex">
  <TextInput id="firstName" type="firstName" placeholder="First Name" required className="border-slate-500 rounded-lg mr-4"/>
  <TextInput id="lastName" type="lastName" placeholder="Last Name" required />
</div>
<div className="flex mb-2">
  <div className="mr-4">
    <div className="mb-2 block">
      <Label htmlFor="email1" value="Your Email" className="text-black" />
    </div>
    <div className="flex mb-2">
      <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
    </div>
  </div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="phoneNumber" value="Phone Number" className="text-black" />
    </div>
    <div className="flex mb-2">
      <TextInput id="phoneNumber" type="tel" placeholder="Phone Number" required />
    </div>
  </div>
</div>


<div className="flex mb-2">
  <div className="mr-4">
    <div className="mb-2 block">
      <Label htmlFor="password" value="Password" className="text-black" />
    </div>
    <div className="flex mb-2">
      <TextInput id="password" type="password" placeholder="Password" required />
    </div>
  </div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="confirmPassword" value="Confirm Password" className="text-black" />
    </div>
    <div className="flex mb-2">
      <TextInput id="confirmPassword" type="password" placeholder="Confirm Password" required />
    </div>
  </div>
</div>

      <Button type="submit" className="bg-pink-600 w-32">Create Account</Button>

      <p className="text-black text-center">Already have an account? <a href="/login" className="text-pink-600">Login</a></p>
    </form>
    </main>
  );
}


