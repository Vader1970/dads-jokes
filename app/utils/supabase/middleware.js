// This code defines an asynchronous function named updateSession that takes a request object as an argument. Inside this function:
// - A NextResponse object is created to hold the response.
// - A Supabase server client is created using createServerClient, with custom cookie handling functions provided.
// - The custom cookie handling functions interact with cookies in the request and update the response accordingly.
// - User information is fetched from Supabase to update the session.
// - Finally, the updated response is returned.

// Importing the createServerClient function from the Supabase SSR library
import { createServerClient } from "@supabase/ssr";
// Importing the NextResponse object from the Next.js server module
import { NextResponse } from "next/server";

// Define an asynchronous function named updateSession
export async function updateSession(request) {
  // Creating a NextResponse object to hold the response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Creating a Supabase server client with custom cookie handling
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL, // Supabase URL from environment variables
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, // Supabase anonymous key from environment variables
    {
      // Custom cookie handling functions
      cookies: {
        // Function to get a cookie value by name
        get(name) {
          return request.cookies.get(name)?.value;
        },
        // Function to set a cookie
        set(name, value, options) {
          // Setting the cookie in the request
          request.cookies.set({
            name,
            value,
            ...options,
          });
          // Updating the response with the new cookie
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        // Function to remove a cookie
        remove(name, options) {
          // Removing the cookie from the request
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          // Updating the response with the removed cookie
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  // Fetching user information from Supabase to update the session
  await supabase.auth.getUser();

  // Returning the response
  return response;
}
