import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: [
    "/", 
    "/pricing", 
    "/features", 
    "/press", 
    "/playlists", 
    "/manager", 
    "/success", 
    "/cancel"
  ],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // protect everything else
};
