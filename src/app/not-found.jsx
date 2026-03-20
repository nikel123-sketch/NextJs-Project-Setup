import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-5">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>

      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link href="/">
        <button className="bg-violet-600 text-white px-6 py-2 rounded-xl hover:bg-violet-800 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
