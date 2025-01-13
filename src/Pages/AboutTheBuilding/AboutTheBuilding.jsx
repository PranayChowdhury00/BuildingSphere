import buildingImage from "../../assets/NewBanner/fullBuilding.jpg";

const AboutTheBuilding = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-24 mt-7">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold mb-4 text-sky-500">
          About the Building
        </h2>
        <p className="text-lg text-gray-700">
          Our luxurious building combines modern architecture with exceptional comfort. <br /> Whether you are looking for a cozy space or an elegant home, this is the perfect place for you.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[600px]">
          <img
            src={buildingImage}
            alt="Building"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 h-[600px] px-6 mb-64  md:mb-0">
          <h3 className="text-2xl font-semibold text-sky-400 mb-4">Building Features</h3>
          <ul className="space-y-1 text-lg text-gray-900">
            <li>✅ Modern architectural design with high ceilings</li>
            <li>✅ Spacious apartments with large windows</li>
            <li>✅ Premium quality finishes and flooring</li>
            <li>✅ 24/7 security and concierge services</li>
            <li>✅ Fully equipped fitness center</li>
            <li>✅ Underground parking for residents</li>
          </ul>

          <h3 className="text-2xl font-semibold text-sky-400 mb-4 mt-8">Location & Amenities</h3>
          <p className="text-lg text-gray-600 mb-6">
            Located in the heart of the city, this building offers an unmatched lifestyle with easy access to parks, restaurants, and public transportation. Enjoy all the conveniences of urban living while being surrounded by green spaces.
          </p>

          <ul className="space-y-4 text-lg text-gray-900">
            <li>🏙️ Prime location with panoramic city views</li>
            <li>🌳 Nearby parks and recreational areas</li>
            <li>🍽️ Dining options and cafes within walking distance</li>
            <li>🚇 Easy access to public transportation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutTheBuilding;
