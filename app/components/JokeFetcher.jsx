//This code defines a React functional component called JokerFetcher. Inside this component, it initializes a state variable joke using the useState hook to store the fetched joke. The fetchJoke function is an asynchronous function that sends a GET request to the specified API endpoint to fetch a random dad joke. Upon receiving the response, it updates the joke state with the fetched joke. The useEffect hook is used to trigger the fetchJoke function when the component mounts, ensuring that the joke is fetched only once after the initial render. The component renders a paragraph element to display the fetched joke or a loading message, and a button element to fetch a new joke when clicked.

"use client";

// Importing React hooks for managing side effects and component state
import { useEffect, useState } from "react";

// Define the JokerFetcher functional component
export default function JokerFetcher() {
  // Define state variable 'joke' and a function to update it 'setJoke'
  const [joke, setJoke] = useState("");

  // Function to fetch a new joke from the API
  const fetchJoke = async () => {
    // Sending a GET request to the API endpoint
    const respone = await fetch("https://icanhazdadjoke.com/", {
      // Setting the Accept header to receive JSON response
      headers: {
        Accept: "application/json",
      },
    });
    // Parsing the JSON response
    const data = await respone.json();
    // Updating the 'joke' state with the fetched joke
    setJoke(data.joke);
  };

  // Using the useEffect hook to perform the fetch operation when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      {/* Displaying the fetched joke or a loading message */}
      <p className='=text-lg md:text-xl lg:text-2xl p-5'>{joke || "Loading joke..."}</p>
      {/* Button to fetch a new joke */}
      <div onClick={fetchJoke}>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Regenerate</button>
      </div>
    </div>
  );
}
