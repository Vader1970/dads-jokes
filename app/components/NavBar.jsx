// Importing the Link component from Next.js for client-side navigation
import Link from "next/link";

// Define the NavBar functional component
export default function NavBar() {
  return (
    // Navigation bar with a dark gray background and white text, padding of 4 on all sides
    <nav className='bg-gray-900 text-white p-4'>
      <div className='flex justify-between items-center w-full'>
        {/* Unordered list for navigation links with space between items */}
        <ul className='flex space-x-4 justify-center items-center'>
          {/* Navigation link for Home page */}
          <li>
            <Link className='hover:text-blue-500' href='/'>
              Home
            </Link>
          </li>
          {/* Navigation link for Saved Jokes page */}
          <li>
            <Link className='hover:text-blue-500' href='/saved-jokes'>
              Saved Jokes
            </Link>
          </li>
          {/* Navigation link for GitHub page */}
          <li>
            <Link className='hover:text-blue-500' href='https://github.com/Vader1970/dads-jokes'>
              GitHub
            </Link>
          </li>
        </ul>
        <div>{/* LoginOrLogout */}</div>
      </div>
    </nav>
  );
}
