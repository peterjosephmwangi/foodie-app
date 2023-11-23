import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Create a Next.js response object
  const res = NextResponse.next();

  // Create a Supabase client using the request and response objects
  const supabase = createMiddlewareClient({ req, res });

  // Retrieve the user's session
  const { data } = await supabase.auth.getSession();

  // Check if a session exists and redirect accordingly
  if (data?.session) {
    if (req.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else {
    // No session: Redirect to "/auth" for specific routes
    const protectedRoutes = ["/checkout", "/success", "/orders"];
    if (
      protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))
    ) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
  }

  // Return the original response object
  return res;
}
