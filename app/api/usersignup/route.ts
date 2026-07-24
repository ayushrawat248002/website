import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import { genSalt, hash,compare } from "bcrypt";
import connectDB from "@/lib/mongodb";
export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const reqBody = await req.json();

    const existingUser = await User.findOne({ email: reqBody.email });
     console.log(existingUser);
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" , status : 409},
        
      );
    }

   
    const user = await User.create({
      email: reqBody.email,
      name: reqBody.name,
      password: reqBody.password,
      phone: reqBody.number,
    });

     console.log(user)


    const secret = process.env.JWT_SECRET!;
    console.log(secret)

    const token = jwt.sign(
      { userId: user._id },
      secret,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      { userId: user._id },
      secret,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({ message: "User created" , status : 200});

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
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}