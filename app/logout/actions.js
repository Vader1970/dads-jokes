"use server";

// Importing the redirect function from the next/navigation module
import { redirect } from "next/navigation";
// Importing the createClient function from the supabase server utility
import { createClient } from "../utils/supabase/server";
// Importing the revalidatePath function from the next/cache module
import { revalidatePath } from "next/cache";

// Function to handle user logout
export async function logout() {
  // Creating a Supabase client instance
  const supabase = createClient();
  // Attempting to sign out the user
  const { error } = await supabase.auth.signOut();

  // Handling any errors that occur during sign-out
  if (error) {
    console.error(error);
    // Redirecting to the error page if an error occurs
    redirect("/error");
  }

  // Revalidating the '/login' route after successful sign-out
  revalidatePath("/login");
  // Revalidating the '/saved-jokes' route after successful sign-out
  revalidatePath("/saved-jokes");
  // Revalidating the '/' (home) route after successful sign-out
  revalidatePath("/");
}
