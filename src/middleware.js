import { NextResponse } from "next/server";

export async function middleware(req) {
  // const session = await getSession({ req });
  const login = true;
  // if (session && session.status === "authenticated") {
  //   console.log(session);
  //   return NextResponse.next();
  // } else {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  if (login) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/home", "/products", "/products/cildent", "/category", "/about"],
  pages: {
    signIn: "/login",
  },
};
