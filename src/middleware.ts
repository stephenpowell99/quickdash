import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verify } from "jsonwebtoken";

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname;

  // Define public paths
  const isPublicPath = 
    path === "/" || 
    path === "/login" || 
    path === "/register" || 
    path.startsWith("/api/auth/");

  // Get the token from the cookies
  const token = request.cookies.get("auth-token")?.value || "";

  // Redirect logic
  if (isPublicPath && token) {
    // If user is logged in and trying to access public page, redirect to dashboard
    // But we'll allow API routes for authentication
    if (path === "/login" || path === "/register") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (!isPublicPath && !token) {
    // If user is not logged in and trying to access protected page, redirect to login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/ (public images)
     */
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
}; 