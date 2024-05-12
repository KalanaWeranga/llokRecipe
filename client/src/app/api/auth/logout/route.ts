import { COOKIE_NAME,MAX_AGE } from "@/app/constants";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";



export async function GET() {
    
    console.log("kalana");
    
    const cookieStore = cookies()
    cookieStore.delete(COOKIE_NAME)
    // localStorage.removeItem('user');
    const response = {
        message: "logout successfully",
      };
    
      return new Response(JSON.stringify(response), {
        status: 200
      });
    // return true
  
}
