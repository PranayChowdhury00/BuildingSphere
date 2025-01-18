import React from "react";
// import Marquee from "react-marquee-slider";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const companies = [
    "Bechtel Corporation",
    "Fluor Corporation",
    "Turner Construction",
    "Skanska USA",
    "Kiewit Corporation",
    "PCL Construction",
  ];

  return (
    <div className=" mt-10">
      <div className="text-center">
        <h1 className="text-2xl text-sky-500 font-bold md:text-5xl py-4 mb-3">
          Hundreds of Partners <br /> Around the World
        </h1>
        <div className="flex justify-center items-center ">
          <hr className="w-8 border-red-500 border-t-4" />
          <hr className="w-8 ml-5 border-red-300 border-t-4" />
        </div>
        <p className="text-gray-400 font-medium mb-5 mt-3 py-3">
          Every day, we build trust through communication, transparency, and
          results.
        </p>
      </div>
      <Marquee speed={50} gradient={false}>
        {companies.map((company, index) => (
          <div
            key={index}
            className="mx-6 text-lg font-semibold text-blue-600 bg-gray-200 shadow-xl rounded-lg px-4 py-4"
          >
            {company}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;
