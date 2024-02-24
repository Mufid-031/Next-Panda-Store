import { NextResponse } from "next/server";

export function middleware(req) {
  const isLogin = true;
  if (isLogin) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/home", "/products", "/products/server"],
};
