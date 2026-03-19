"use client"
import Link from "next/link";
import React from "react";

const StorisCard = ({ story }) => {
  const { name, id, title, description, image } = story;

  return (
    <div className="bg-white shadow-xl rounded-3xl p-6 border-4 border-amber-500 hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-2xl mb-4 transition-transform duration-300 hover:scale-105"
      />

      {/* Content */}
      <div className="mb-4">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-500 text-sm mb-3">by {name}</p>
        <p className="text-gray-700 text-base leading-relaxed">
          {description.slice(0, 80)}...
        </p>
      </div>

      {/* Button */}
      <Link
        href={`/storis/${story.id}`}
        className="mt-3 w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
      >
        Read More
      </Link>
    </div>
  );
};

export default StorisCard;
