import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
 import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const cookieValue = (await cookieStore).get('LoginCookie');

      if(!cookieValue?.value){
   return NextResponse.json({ success: false, message : 'User not exist' });
      }

      const isvalid = jwt.verify(cookieValue.value,`${process.env.JWT_SECRET}`)
       if(!isvalid){
         return NextResponse.json({success : false,message : 'expired token'})
       }

}