// Client delete joke button

"use client";

// Importing the deleteJoke function from the joke actions
import { deleteJoke } from "../data/joke/actions";

// Component for rendering a delete button for jokes
export default function DeleteJokeButton({ jokeId }) {
  return (
    // Rendering the delete button
    <button
      className='text-red-500 p-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 '
      // Event handler for the onClick event, invoking the deleteJoke function with the jokeId parameter
      onClick={() => deleteJoke(jokeId)}
    >
      X
    </button>
  );
}
