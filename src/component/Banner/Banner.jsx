"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
    const router=useRouter()
    const hendlebtn=()=>{
        const password=prompt('inter your password')
        if(password==='1234'){
            router.push('/dashbord')
        }
    }
  return (
    <div className="bg-gray-900 text-white text-center py-16 px-4 sm:px-6 lg:px-8 rounded-2xl">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Welcome to Next.js 🚀
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-xl mx-auto">
        Build fast and modern web applications with Next.js and Tailwind CSS.
      </p>

      {/* Button */}
      <button onClick={hendlebtn} className="bg-amber-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-amber-500 transition">
        Explore Now
      </button>
    </div>
  );
};

export default Banner;
