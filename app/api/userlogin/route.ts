import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function POST(req : NextRequest){
     
             const {email, password} = await req.json();
                 console.log(email,password)
         try{
             const userExisted = await User.findOne({email : email})
             console.log(userExisted)
              if(!userExisted){

                return  NextResponse.json({status : 201, message : 'User not present' });

              }

                const passwordvalid =  await userExisted.checkpassword(password);

                if(userExisted && passwordvalid){

                    const response = NextResponse.json({ message: "User created" });
                        const secret : any = process.env.JWT_SECRET

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
                      secure: true,
                      sameSite: "lax",
                      path: "/",
                    });

                    response.cookies.set("RefreshToken", refreshToken, {
                      httpOnly: true,
                      secure: true,
                      sameSite: "lax",
                      path: "/",
                    });
                  
                    return response;
                }
         }catch(err){

              return NextResponse.json({status : 401, message : 'Authentication failed'})
         }    

}