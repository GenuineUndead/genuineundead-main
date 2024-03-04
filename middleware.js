import { NextResponse } from "next/server";

export function middleware(request) {
  const { hostname, pathname } = request.nextUrl;

  // Check if the request is coming from genuineundead.io
  if (hostname === "genuineundead.io") {
    // Create a URL for the destination
    const destinationUrl = `https://www.genuineundead.com${pathname}`;
    return NextResponse.redirect(destinationUrl, 308);
  }

  return NextResponse.next();
}
