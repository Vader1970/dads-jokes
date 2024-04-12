// Importing the Link component from next/link module
import Link from "next/link";
// Importing the createClient function from the supabase server utility
import { createClient } from "../utils/supabase/server";
// Importing the LogoutButton component
import LogoutButton from "./LogoutButton";

// Function to render either the logout button or login link based on user authentication status
export default async function LogoutOrLogin() {
  // Creating a Supabase client instance
  const supabase = createClient();
  // Retrieving user information from Supabase
  const { data } = await supabase.auth.getUser();
  // Logging user data for debugging purposes
  console.log({ data });

  // If user is authenticated, render the logout button
  if (data.user) {
    return (
      <div>
        <LogoutButton />
      </div>
    );
  }

  // If user is not authenticated, render the login link
  return (
    <div>
      <Link className='hover:text-blue-500' href='/login'>
        Login
      </Link>
    </div>
  );
}
