import Link from 'next/link';
import React from 'react';


const storisdata = [
  {
    id: 1,
    name: "John Doe",
    title: "The Lost City",
    description:
      "A young explorer discovers a hidden city deep in the jungle filled with ancient secrets and mysterious powers.",
    image: "https://example.com/images/lost-city.jpg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    title: "Journey to the Stars",
    description:
      "An astronaut embarks on a dangerous mission to save humanity by traveling beyond the known galaxy.",
    image: "https://example.com/images/journey-stars.jpg",
  },
  {
    id: 3,
    name: "Michael Lee",
    title: "The Silent Forest",
    description:
      "A group of friends enters a forest where no sound exists, only to uncover a terrifying truth hidden within.",
    image: "https://example.com/images/silent-forest.jpg",
  },
  {
    id: 4,
    name: "Emily Clark",
    title: "Time Loop",
    description:
      "A scientist gets trapped in a time loop and must solve a complex puzzle to break free before it's too late.",
    image: "https://example.com/images/time-loop.jpg",
  },
  {
    id: 5,
    name: "David Brown",
    title: "Ocean's Secret",
    description:
      "A marine biologist uncovers a hidden underwater civilization that could change the course of human history.",
    image: "https://example.com/images/ocean-secret.jpg",
  },
];
const StorisDetails = async({params}) => {
    const {id}=await params;

    const singlestory=storisdata.find(d=>d.id===Number(id));
    // console.log(singlestory)
    const { name,  title, description, image } = singlestory;
   if(!singlestory){
    return <p>story not found</p>
   }
    return (
      <div>
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 border border-gray-100">
          {/* Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover rounded-2xl"
          />

          {/* Content */}
          <div className="mt-4">
            <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
            <p className="text-gray-500 text-sm mb-3">by {name}</p>
            <p className="text-gray-700 text-base leading-relaxed">
              {description.slice(0, 80)}...
            </p>
          </div>

          {/* Link Button */}
          <Link
            href="/storis"
            className="inline-block bg-amber-400 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-amber-500 hover:shadow-lg transition duration-300 mt-5"
          >
            Go to Storis
          </Link>
        </div>
      </div>
    );
};

export default StorisDetails;