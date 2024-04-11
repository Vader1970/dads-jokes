// This code exports a function named middleware and a configuration object named config for global middleware:
// - The middleware function calls the updateSession function from the imported module with the request object as an argument and returns its result. This function acts as the entry point for the global middleware and is responsible for processing each incoming request.
// - The config object specifies the configuration for the middleware. It contains a matcher property, which is an array defining regular expressions to match against incoming request paths. The provided regular expression matches all request paths except those starting with _next/static, _next/image, or ending with favicon.ico, or having extensions: .svg, .png, .jpg, .jpeg, .gif, .webp. This configuration ensures that the middleware is applied to all requests except for static files, image files, and favicon files. You can modify this pattern to include additional paths as needed.

// Importing the updateSession function from the middleware module in utils/supabase directory
import { updateSession } from "./app/utils/supabase/middleware";

// Define an asynchronous function named middleware
export async function middleware(request) {
  // Calling the updateSession function with the request object and returning its result
  return await updateSession(request);
}

// Exporting a configuration object for the middleware
export const config = {
  // Matcher property specifies which requests this middleware should be applied to
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
