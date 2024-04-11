//This code exports a function named createClient that returns a Supabase client. The client is created using the createBrowserClient function from the Supabase SSR library. It takes two arguments: the Supabase URL and the anonymous key. These values are retrieved from environment variables (process.env.NEXT_PUBLIC_SUPABASE_URL and process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY), allowing you to keep sensitive information separate from your code and configurable based on your deployment environment.

// Importing the createBrowserClient function from the Supabase SSR library
import { createBrowserClient } from "@supabase/ssr";

// Define a function named createClient
export function createClient() {
  // Returning a Supabase client initialized with the Supabase URL and anonymous key
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL, // Supabase URL from environment variables
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // Supabase anonymous key from environment variables
  );
}
