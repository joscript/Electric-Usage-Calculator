import React from "react";

function Banner() {
  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src="https://source.unsplash.com/random"
          className="w-full h-44 object-cover"
          alt="image"
        ></img>
      </div>
      <div className="my-3">
        <p className="font-sans text-xl font-medium text-gray-500">
          Let's compute your electricity usage!
        </p>
      </div>
    </>
  );
}

export default Banner;
