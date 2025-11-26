import { NextResponse } from "next/server";

export function proxy(request) {
  const cookieHeader = request.headers.get("cookie") || "";

  // Cookie authUser check
  const loggedIn = cookieHeader.includes("authUser=");

  // !User  redirect
  if (!loggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // User > pass-through
  return NextResponse.next();
}

export const config = {
  matcher: ["/addProduct/:path*", "/manageProducts/:path*"],
};
