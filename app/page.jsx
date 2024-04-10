// Define a functional component called Home
export default function Home() {
  return (
    // Main container with background color, centering content both horizontally and vertically,
    // and setting text color to white
    <main className='bg-gray-800 min-h-screen flex items-center justify-center text-center text-white'>
      {/* Rendering JokerFetcher component */}
      <JokerFetcher />
    </main>
  );
}
