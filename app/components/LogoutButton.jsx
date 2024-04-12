"use client";

// Importing the logout function from the logout actions file
import { logout } from "../logout/actions";

// Functional component for rendering a logout button
export default function LogoutButton() {
  // Render a button that calls the logout function when clicked
  return (
    <button
      onClick={() => logout()} // On click, call the logout function from the logout actions
      className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200 ease-in-out'
    >
      Logout
    </button>
  );
}
