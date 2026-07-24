import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { compare } from "bcrypt";
import connectDB from "@/lib/mongodb";
export async function POST(req : NextRequest){
     
             const {email, password, cookieNeeded} = await req.json();
                 console.log(email, password,cookieNeeded)
            

         try{
          try{
           await connectDB();
          }catch(err){
            console.log('error during connection')
          }
             const userExisted = await User.findOne({email : email})
              if(!userExisted){

                return  NextResponse.json({status : 201, message : 'User not present' });

              }


      const passwordvalid = await compare(password, userExisted.password);
                    console.log(passwordvalid, 'pass')
                if(userExisted && passwordvalid){

                    const response = NextResponse.json({ message: "sucessfull", status : 200 });
                        const secret : any = process.env.JWT_SECRET
                          console.log( cookieNeeded , 'cook')
                        if(cookieNeeded){

                        const refreshToken = jwt.sign(
                      { userId: userExisted._id },
                      secret,
                      { expiresIn: "7d" }
                    );

                       const token = jwt.sign(
                      { userId : userExisted._id},
                      secret,
                      { expiresIn: "1h" }
                    );
                    
                    response.cookies.set("LoginCookie", token, {
                      httpOnly: true,
                      secure: false,
                      sameSite: "lax",
                      path: "/",
                    });

                    response.cookies.set("RefreshToken", refreshToken, {
                      httpOnly: true,
                      secure: false,
                      sameSite: "lax",
                      path: "/",
                    });
                  
                  
                    return response;
                  }
                  return NextResponse.json({status : 200})
                }
         }catch(err){
                  console.log(err)
              return NextResponse.json({status : 401, message : 'Authentication failed'})
         }    

}