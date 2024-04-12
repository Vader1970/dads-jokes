// Importing the createClient function from the supabase server utility
import { createClient } from "@/app/utils/supabase/server";
// Importing the NextResponse object from the next/server module
import { NextResponse } from "next/server";

// Handling GET requests to the confirm route
export async function GET(request) {
  // Extracting query parameters from the request URL
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  // Setting the default value for the 'next' parameter as '/'
  const next = searchParams.get("next") ?? "/";

  // Creating a clone of the next URL to modify it for redirection
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;
  // Removing token_hash and type parameters from the redirect URL
  redirectTo.searchParams.delete("token_hash");
  redirectTo.searchParams.delete("type");

  // Checking if token_hash and type parameters are present in the query
  if (token_hash && type) {
    const supabase = createClient();

    // Verifying the one-time password (OTP) token with Supabase
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    // If no error occurred during OTP verification, redirect to the 'next' URL
    if (!error) {
      redirectTo.searchParams.delete("next");
      // Redirecting to the modified URL
      return NextResponse.redirect(redirectTo);
    }
  }

  // return the user to an error page with some instructions
  // If an error occurred during OTP verification or if token_hash and type parameters are missing,redirect the user to an error page
  redirectTo.pathname = "/error";
  // Redirecting to the error page
  return NextResponse.redirect(redirectTo);
}
