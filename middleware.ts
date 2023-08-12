export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/contentpage/:path*", "/post/:path*"],
};
