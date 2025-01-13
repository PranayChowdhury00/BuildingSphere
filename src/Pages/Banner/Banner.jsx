import React from "react";
import banner1 from "../../assets/Banner/banner1.jpg";
import banner2 from "../../assets/Banner/banner2.jpg";
import banner3 from "../../assets/Banner/banner3.jpg";
import banner4 from "../../assets/Banner/banner4.jpg";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: banner1,
      title: "Luxury Apartments",
      description: "Experience the elegance of modern living in our premium apartments.",
    },
    {
      id: 2,
      image: banner2,
      title: "Comfortable Living",
      description: "Discover comfort and style with breathtaking views.",
    },
    {
      id: 3,
      image: banner3,
      title: "Urban Lifestyle",
      description: "Live in the heart of the city with all the amenities you need.",
    },
    {
      id: 4,
      image: banner4,
      title: "Modern Spaces",
      description: "Find your perfect space in a vibrant urban setting.",
    },
  ];

  return (
    <div className="carousel w-full relative py-5">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="carousel-item relative w-full transition-all duration-1000 ease-in-out"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full object-cover h-[80vh] transition-all duration-1000 ease-in-out"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <h2 className="text-6xl font-bold mb-4 text-sky-600">{slide.title}</h2>
            <p className="text-lg text-sky-100">{slide.description}</p>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle bg-opacity-50 text-white hover:bg-opacity-100"
            >
              ❮
            </a>
            <a
              href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
              className="btn btn-circle bg-opacity-50 text-white hover:bg-opacity-100"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
      {/* Carousel Indicators */}
      <div className="carousel-nav absolute inset-x-0 bottom-5 flex justify-center space-x-2">
        {slides.map((slide) => (
          <a
            key={slide.id}
            href={`#slide${slide.id}`}
            className="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition duration-300"
          ></a>
        ))}
      </div>
    </div>
  );
};

export default Banner;
