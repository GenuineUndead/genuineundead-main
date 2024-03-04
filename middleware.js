import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  let hostname = request.headers.get("host");

  // Normalize hostname to lowercase
  if (hostname) {
    hostname = hostname.toLowerCase();
  }

  // Check if the request is coming from genuineundead.io or www.genuineundead.io
  if (hostname === "genuineundead.io" || hostname === "www.genuineundead.io") {
    // Redirect to https://www.genuineundead.com, preserving the path
    const destinationUrl = `https://www.genuineundead.com${pathname}`;
    return NextResponse.redirect(destinationUrl, 308);
  }

  return NextResponse.next();
}
