// Importing the createClient function from the Supabase server utilities
import DeleteJokeButton from "../components/DeleteJokeButton";
import { createClient } from "../utils/supabase/server";

// Public route component for the Saved Jokes page
export default async function SavedJokes() {
  // Creating a Supabase client instance
  const supabase = createClient();
  // Fetching user data from the authenticated session
  const { data: userData } = await supabase.auth.getUser();
  // Initializing an empty array to store fetched jokes
  let jokes = [];

  // Checking if the user is authenticated
  if (userData.user) {
    // If authenticated, fetching jokes data from the 'joke' table
    const { data: jokesData, error } = await supabase.from("joke").select("*");
    // Handling any errors that occur during the fetching process
    if (error) {
      console.error("Error fetching jokes:", error);
    }
    // Assigning fetched jokes data to the 'jokes' array
    jokes = jokesData;
  }

  // Setting the header text based on the user's authentication status and the presence of saved jokes
  let header = "Saved Jokes";

  if (!jokes.length) {
    header = "Save some jokes to see your jokes";
  }

  if (!userData.user) {
    header = "Login to save your favorite jokes";
  }

  // Rendering the Saved Jokes page layout
  return (
    <main className='bg-gray-800 min-h-screen flex flex-col items-center justify-center text-center text-white p-4'>
      <h1 className='text-2xl font-bold mb-4'>{header}</h1>
      <ul>
        {/* Mapping through the 'jokes' array to render each saved joke */}
        {jokes.map((joke) => (
          <div key={joke.id} className='flex items-center justify-center space-x-2'>
            <li className='list-none'>{joke.joke_text}</li>
            {/* Rendering the DeleteJokeButton component with the jokeId prop set to the ID of the current joke, allowing users to delete individual jokes when clicked */}
            <DeleteJokeButton jokeId={joke.id} />
          </div>
        ))}
      </ul>
    </main>
  );
}
