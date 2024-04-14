"use client";

// Importing React's useState hook for managing component state
import { useState } from "react";

// Import login and signup from servers actions
import { login, signup } from "./actions";

// Define the Login functional component
export default function Login() {
  // State variables for managing sign-up state and click event for sign-up
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [clickedSignUp, setClickedSignUp] = useState(false);

  // Render the login form
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white'>
      <form className='space-y-6'>
        {/* Email input field */}
        <div>
          <label htmlFor='email' className='sr-only'>
            Email Address
          </label>
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            required
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-700 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
            placeholder='Email address'
          />
        </div>

        {/* Password input field */}
        <div>
          <label htmlFor='password' className='sr-only'>
            Password
          </label>
          <input
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-700 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
            placeholder='Password'
          />
        </div>

        {/* Display sign-up confirmation message if sign-up button is clicked */}
        {clickedSignUp && <div>Sign up link sent! Go confirm your email.</div>}

        {/* Conditional rendering of sign-up and login buttons */}
        <div>
          {isSigningUp ? (
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
              // signup from server actions
              formAction={signup}
              onClick={() => setClickedSignUp(true)}
            >
              Sign up
            </button>
          ) : (
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              // login from server side actions
              formAction={login}
            >
              Login
            </button>
          )}
        </div>
      </form>

      {/* Conditional rendering of sign-up and login links */}
      {!isSigningUp ? (
        <p className='mt-4 text-center text-sm text-gray-400'>
          Don't have an account?{" "}
          <button className='font-medium text-white hover:text-blue-500' onClick={() => setIsSigningUp(true)}>
            Sign up
          </button>
        </p>
      ) : (
        <p className='mt-4 text-center text-sm text-gray-400'>
          Already have an account?{" "}
          <button className='font-medium text-white hover:text-blue-500' onClick={() => setIsSigningUp(false)}>
            Login
          </button>
        </p>
      )}
    </main>
  );
}
