import React from "react";
import { BsBuildings } from "react-icons/bs";
import { FaBath, FaLocationArrow } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineStarHalf } from "react-icons/md";

const FeaturedProperties = () => {
  return (
    <div className="mt-10 bg-sky-100 py-7">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="text-5xl font-semibold text-sky-500 mb-3">
          Featured Properties for Sale
        </h1>
        <div className="flex justify-center items-center py-3">
          <hr className="w-8 border-red-500 border-t-4" />
          <hr className="w-8 ml-5 border-red-300 border-t-4" />
        </div>
        <p className="text-gray-500 font-medium">
          Hand-Picked selection of quality places
        </p>
      </div>

      {/* Card Section */}
      <div className="grid md:grid-cols-3 grid-cols-1 max-w-7xl mx-auto gap-5">
        {/* Card 1 */}
        <div className="relative bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Image Section */}
          <figure className="p-5 group">
            <img
              className="w-full h-[250px] object-cover rounded-lg transform transition-transform duration-500 ease-in group-hover:scale-110 group-hover:opacity-90"
              src="https://i.ibb.co/BLZC4HJ/chuttersnap-7-Bby-M7-Gb-Wyw-unsplash.jpg"
              alt="Property"
            />
          </figure>
          {/* Tags */}
          <div className="absolute top-6 left-6 flex justify-between">
            <span className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full font-semibold">
              Featured
            </span>
            <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-full font-semibold">
              New
            </span>
          </div>
          <hr className="ml-7 mr-7 border-1 border-gray-200"/>
          {/* Card Body */}
          <div className="p-5 ">
            <div className="flex gap-5 items-center">
              <p className="flex gap-3">
                <IoIosStar className="text-yellow-500 font-bold" />
                <IoIosStar className="text-yellow-500 font-bold" />
                <IoIosStar className="text-yellow-500 font-bold" />
                <IoIosStar />
                <IoIosStar />
              </p>
              <p>3.0 (of 10)</p>
            </div>
            <div>
              <h1 className="text-xl font-semibold py-2">Glee Space</h1>
              <p className="flex items-center gap-3">
                <FaLocationArrow />
                <span className="text-[18px] font-medium">
                  Silverwood Valley, Elm Street, SWV 3492.
                </span>
              </p>
            </div>
            <div className="bg-gray-400 shadow-xl flex justify-between px-4 py-2 rounded-lg mt-4">
              <p className="flex items-center text-white font-medium">
                <IoBedOutline className="text-sky-500 " />3 Bed
              </p>
              <p className="flex items-center text-white font-medium">
                <FaBath className="text-sky-500 " />2 Bath
              </p>
              <p className="flex items-center text-white font-medium">
                <BsBuildings className="text-sky-500 " />1500 sqft
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white shadow-xl rounded-lg overflow-hidden">
          <figure className="p-5 group">
            <img
              className="w-full h-[250px] object-cover rounded-lg transform transition-transform duration-500 ease-in group-hover:scale-110 group-hover:opacity-90"
              src="https://i.ibb.co/fnfkrgD/zoshua-colah-U7ri-Pss-YD0-unsplash.jpg"
              alt="Property"
            />
          </figure>
          <div className="absolute top-6 left-6 flex justify-between">
            <span className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full font-semibold">
              Featured
            </span>
            <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-full font-semibold">
              New
            </span>
          </div>
          <hr className="ml-7 mr-7 border-1 border-gray-200"/>
          <div className="p-5">
            <div className="flex gap-5 items-center">
              <p className="flex gap-3">
                <IoIosStar className="text-yellow-500 font-bold" />
                <IoIosStar className="text-yellow-500 font-bold" />
                <IoIosStar className="text-yellow-500 font-bold" />
                <MdOutlineStarHalf  className="text-yellow-500 font-bold"/>
                <IoIosStar />
              </p>
              <p>4.5 (of 10)</p>
            </div>
            <div>
              <h1 className="text-xl font-semibold py-2">Luxury Condo</h1>
              <p className="flex items-center gap-3">
                <FaLocationArrow />
                <span className="text-[18px] font-medium">
                  Pearl Avenue, Sunrise City, PAS 6548.
                </span>
              </p>
            </div>
            <div className="bg-gray-400 shadow-xl flex justify-between px-4 py-2 rounded-lg mt-4">
              <p className="flex items-center text-white font-medium">
                <IoBedOutline className="text-sky-500 " />4 Bed
              </p>
              <p className="flex items-center text-white font-medium">
                <FaBath className="text-sky-500 " />3 Bath
              </p>
              <p className="flex items-center text-white font-medium">
                <BsBuildings className="text-sky-500 " />1800 sqft
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white shadow-xl rounded-lg overflow-hidden">
          <figure className="p-5 group">
            <img
              className="w-full h-[250px] object-cover rounded-lg transform transition-transform duration-500 ease-in group-hover:scale-110 group-hover:opacity-90"
              src="https://i.ibb.co/zJWrw8h/aubrey-odom-mr-Su-M73pmsw-unsplash.jpg"
              alt="Property"
            />
          </figure>
          <div className="absolute top-6 left-6 flex justify-between">
            <span className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full font-semibold">
              Featured
            </span>
            <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-full font-semibold">
              New
            </span>
          </div>
          <hr className="ml-7 mr-7 border-1 border-gray-200"/>
          <div className="p-5">
            <div className="flex gap-5 items-center">
              <p className="flex gap-3">
                <IoIosStar className="text-yellow-500 font-bold" />
                <IoIosStar className="text-yellow-500 font-bold" />
                <IoIosStar className="text-yellow-500 font-bold" />
                <IoIosStar className="text-yellow-500 font-bold" />
                <IoIosStar />
              </p>
              <p>4.0 (of 10)</p>
            </div>
            <div>
              <h1 className="text-xl font-semibold py-2">Cozy House</h1>
              <p className="flex items-center gap-3">
                <FaLocationArrow />
                <span className="text-[18px] font-medium">
                  Harmony Lane, Greenfield, HGL 9821.
                </span>
              </p>
            </div>
            <div className="bg-gray-400 shadow-xl flex justify-between px-4 py-2 rounded-lg mt-4">
              <p className="flex items-center text-white font-medium">
                <IoBedOutline className="text-sky-500 " />2 Bed
              </p>
              <p className="flex items-center text-white font-medium">
                <FaBath className="text-sky-500 " />1 Bath
              </p>
              <p className="flex items-center text-white font-medium">
                <BsBuildings className="text-sky-500 " />1200 sqft
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
