import React from 'react';

const Card = (props) => {
  return (
    <div className="max-w-sm p-4 rounded shadow-md border">
      <img
        className="w-full rounded"
        src="https://images.stockcake.com/public/7/d/9/7d9f9028-f507-4eb3-a225-6246aa85b8e0_large/sunset-lotus-bloom-stockcake.jpg"
        alt="Sunset Lotus"
      />

      <h1 className="text-2xl bg-green-300 p-3 mt-3 rounded">
        A card for photos !!
        {props.array}
      </h1>

      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit!
      </p>
    </div>
  );
};

export default Card;
