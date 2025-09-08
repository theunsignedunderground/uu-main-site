// middleware.js
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: [
    "/", "/pricing", "/features", "/press", "/playlists", "/manager",
    "/success", "/cancel",
    "/sign-in(.*)", "/sign-up(.*)",              // ← add these
  ],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
