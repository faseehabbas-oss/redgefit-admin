import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get token from localStorage isn't available in middleware
  // So we'll use cookies instead or check for session
  const token = request.cookies.get('redgefit_token')?.value;
  
  // If accessing protected routes without token, redirect to login
  const isProtectedRoute = pathname.startsWith('/dashboard');
  
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // If accessing auth routes while logged in, redirect to dashboard
  const isAuthRoute = pathname === '/login' || pathname === '/register';
  
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};