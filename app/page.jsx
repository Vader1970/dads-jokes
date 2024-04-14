import JokerFetcher from "./components/JokeFetcher";
// Import createClient from server side
import { createClient } from "./utils/supabase/server";

// Define a functional component called Home
export default async function Home() {
  // Import CreateClient from server
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return (
    // Main container with background color, centering content both horizontally and vertically,
    // and setting text color to white
    <main className='bg-gray-800 min-h-screen flex items-center justify-center text-center text-white'>
      {/* Rendering JokerFetcher component */}
      {/* Pass user into JokerFetcher component as a prop */}
      <JokerFetcher user={data.user} />
    </main>
  );
}
