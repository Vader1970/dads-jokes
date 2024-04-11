"use server";

// Importing the redirect function from the next/dist/server/api-utils module
import { redirect } from "next/dist/server/api-utils";
// Importing the createClient function from the supabase server utility
import { createClient } from "../utils/supabase/server";
// Importing the revalidatePath function from the next/cache module
import { revalidatePath } from "next/cache";

// Function to handle user login
export async function login(formData) {
  // Creating a Supabase client instance
  const supabase = createClient();
  // Extracting email and password from form data
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Attempting to sign in with the provided email and password
  const { error } = await supabase.auth.signInWithPassword(data);

  // Handling any errors that occur during sign-in
  if (error) {
    console.error(error);
    // Redirecting to the error page if an error occurs
    redirect("/error");
  }

  // Revalidating the home page and its layout after successful sign-in
  revalidatePath("/", "layout");
  // Redirecting to the home page after successful sign-in
  redirect("/");
}

// Function to handle user signup
export async function signup(formData) {
  // Creating a Supabase client instance
  const supabase = createClient();
  // Extracting email and password from form data
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Attempting to sign up with the provided email and password
  const { error } = await supabase.auth.signUp(data);

  // Handling any errors that occur during sign-up
  if (error) {
    console.error(error);
    // Redirecting to the error page if an error occurs
    redirect("/error");
  }
}
