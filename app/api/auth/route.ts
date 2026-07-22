import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";   

export async function GET() {
    const cookieStore = await cookies()
 try {

  const accessToken = cookieStore.get("LoginCookie")?.value;
 

  if (!accessToken) throw new Error("No access token");

  const decoded = jwt.verify(accessToken, process.env.JWT_SECRET!);

  return NextResponse.json({
    success: true,
    message: "Access token valid",
    decoded,
  });

} catch (accessErr) {
  // 🔁 ONLY access-token-related failure comes here
   const refreshToken = cookieStore.get('RefreshToken')?.value;
  if (!refreshToken) {
    return NextResponse.json({
      success: false,
      message: "No tokens found. Please login.",
    });
  }

  try {
    const decodedRefresh = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!
    );

    const newAccessToken = jwt.sign(
      { userId : (decodedRefresh as any).userId },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );


    const response = NextResponse.json({
      success: true,
      message: "New access token issued",
    });

    response.cookies.set("LoginCookie", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return response;

  } catch (refreshErr) {
    return NextResponse.json({
      success: false,
      message: "Invalid refresh token. Please login again.",
    });
  }
}
}