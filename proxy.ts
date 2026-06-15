import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers"
import { auth } from "@/lib/auth"

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Bypass static resources, api routes, and file extensions
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // 2. Fetch the session from better-auth
  const session = await auth.api.getSession({
    headers: await headers(),
  })


  // 3. Define path states
  const isDashboard = pathname.startsWith("/admin")
  const isBlankPage = pathname.startsWith("/blank")
  const isLogin = pathname === "/auth/login"
  const isRegister = pathname === "/auth/register"
  const isVerifyEmail = pathname === "/auth/verify-email"
  const isForgotPassword = pathname === "/auth/forgot-password"
  const isResetPassword = pathname === "/auth/reset-password"

  const isAuthPage = isLogin || isRegister || isForgotPassword || isResetPassword

  // 4. Protection for Unauthenticated Users
  if (!session) {
    // Redirect to login if accessing protected pages
    if (isDashboard || isBlankPage) {
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }
    return NextResponse.next()
  }

  // 5. Protection for Authenticated Users
  const emailVerified = session.user.emailVerified
  const userRole = ((session.user as any).role || "").toLowerCase()
  const isAdmin = userRole === "admin"

  // 5a. If email is NOT verified
  if (!emailVerified) {
    // Force user to wait at the verify-email page
    if (!isVerifyEmail) {
      return NextResponse.redirect(new URL("/auth/verify-email", request.url))
    }
    return NextResponse.next()
  }

  // 5b. If email IS verified, they shouldn't access verify-email or auth pages
  if (isVerifyEmail || isAuthPage) {
    return NextResponse.redirect(new URL(isAdmin ? "/admin" : "/blank", request.url))
  }

  // 5c. Enforce role-based access boundaries for verified users
  if (isBlankPage && isAdmin) {
    // Admin trying to access blank page -> redirect to dashboard
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  if (isDashboard && !isAdmin) {
    // Non-admin trying to access dashboard -> redirect to blank page
    return NextResponse.redirect(new URL("/blank", request.url))
  }

  return NextResponse.next()
}

export default proxy
