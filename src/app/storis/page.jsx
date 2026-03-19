import StorisCard from '@/component/Storis/StorisCard';
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

const Storis = () => {
    return (
      <div>
        <h1>this is storis</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-neutral-950 p-5 rounded-2xl">
          {storisdata.map((story) => (
            <StorisCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    );
};

export default Storis;