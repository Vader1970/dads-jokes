"use server";

// Importing the createClient function and revalidatePath from Next.js cache utilities
import { createClient } from "@/app/utils/supabase/server";
import { revalidatePath } from "next/cache";

// Async function to save a joke to the database
export async function saveJoke(joke) {
  // Creating a Supabase client instance
  const supabase = createClient();

  // Retrieving user data from the authenticated session
  const { data } = await supabase.auth.getUser();
  const user = data.user;

  // Checking if the user is authenticated
  if (!user) {
    // If not authenticated, throw an error
    throw Error("Must be an authenticated user to perform this action.");
  }
  try {
    // Inserting the joke into the 'joke' table in the database
    const { data, error } = await supabase.from("joke").insert([{ user_id: user.id, joke_text: joke }]);

    // Checking for any errors during the insertion process
    if (error) throw error;

    // Revalidating the path to the saved jokes page to update the cache
    revalidatePath("/saved-jokes");

    // Returning the inserted data
    return data;
  } catch (error) {
    // Handling any errors that occur during the insertion process
    throw error;
  }
}
