import React from "react";
import { RiListIndefinite } from "react-icons/ri";
import { FaUsers, FaDollarSign, FaBuilding } from "react-icons/fa";

const TotalUsersAndSell = () => {
  return (
    <div className="bg-sky-100 h-[300px] flex items-center justify-center mt-8">
      {/* Cards Container */}
      <div className="flex justify-center gap-6 max-w-5xl">
        {/* First Card */}
        <div className="flex flex-col items-center w-[220px] bg-sky-400 p-4 rounded-lg shadow-lg hover:bg-sky-500 transition-all duration-300">
          <p className="text-5xl text-purple-700 font-bold">
            <RiListIndefinite />
          </p>
          <p className="text-3xl text-white font-bold py-2">10k</p>
          <p className="text-2xl text-white font-bold text-center">Listings Added</p>
        </div>

        {/* Second Card */}
        <div className="flex flex-col items-center w-[220px] bg-sky-400 p-4 rounded-lg shadow-lg hover:bg-sky-500 transition-all duration-300">
          <p className="text-5xl text-purple-700 font-bold">
            <FaUsers />
          </p>
          <p className="text-3xl text-white font-bold py-2">5k</p>
          <p className="text-2xl text-white font-bold text-center">Active Users</p>
        </div>

        {/* Third Card */}
        <div className="flex flex-col items-center w-[220px] bg-sky-400 p-4 rounded-lg shadow-lg hover:bg-sky-500 transition-all duration-300">
          <p className="text-5xl text-purple-700 font-bold">
            <FaDollarSign />
          </p>
          <p className="text-3xl text-white font-bold py-2">$50k</p>
          <p className="text-2xl text-white font-bold text-center">Total Revenue</p>
        </div>

        {/* Fourth Card */}
        <div className="flex flex-col items-center w-[220px] bg-sky-400 p-4 rounded-lg shadow-lg hover:bg-sky-500 transition-all duration-300">
          <p className="text-5xl text-purple-700 font-bold">
            <FaBuilding />
          </p>
          <p className="text-3xl text-white font-bold py-2">20</p>
          <p className="text-2xl text-white font-bold text-center">Properties Sold</p>
        </div>
      </div>
    </div>
  );
};

export default TotalUsersAndSell;
