import { Inter } from "next/font/google";
import "./globals.css";
// Import Navbar component from components NavBar.jsx
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dad Jokes",
  description: "An app tp see and save dad jokes",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* Render NavBar on all pages */}
        <NavBar />
        {children}
      </body>
    </html>
  );
}
