import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();

    const existingUser = await User.findOne({ email: reqBody.email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const user = await User.create({
      email: reqBody.email,
      password: reqBody.password,
    });
         const secret : any = process.env.JWT_SECRET
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
  const response = NextResponse.json({ message: "User created" });

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

   

    
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}