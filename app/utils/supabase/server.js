// Importing the createServerClient function from the Supabase SSR library
import { createServerClient } from "@supabase/ssr";
// Importing the cookies function from Next.js headers module
import { cookies } from "next/headers";

// Define a function named createClient
export function createClient() {
  // Retrieve cookies from the request headers
  const cookieStore = cookies();

  // Returning a Supabase server client initialized with the Supabase URL, anonymous key, and custom cookie handling
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL, // Supabase URL from environment variables
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, // Supabase anonymous key from environment variables
    {
      // Custom cookie handling functions
      cookies: {
        // Function to get a cookie value by name
        get(name) {
          return cookieStore.get(name)?.value;
        },
        // Function to set a cookie
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // Ignoring errors when setting cookies from server components
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        // Function to remove a cookie
        remove(name, options) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // Ignoring errors when removing cookies from server components
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}
