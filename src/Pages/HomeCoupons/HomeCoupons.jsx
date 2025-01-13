import { useState } from "react";

import Coupon50 from '../../assets/Coupon/Coupon50.avif';
import Coupon20 from '../../assets/Coupon/Coupon20.jpg';
import CouponBuy1 from '../../assets/Coupon/buy1.avif';

const coupons = [
  {
    id: 1,
    title: "50% Off on Electronics",
    description: "Get 50% off on all electronic items. Valid for a limited time only.",
    discount: "50%",
    code: "ELEC50",
    expiration: "2025-12-31",
    image: Coupon50,
  },
  {
    id: 2,
    title: "20% Off on Clothing",
    description: "Save 20% on all clothing items. Use code at checkout.",
    discount: "20%",
    code: "CLOTH20",
    expiration: "2025-06-30",
    image: Coupon20,
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free on Coffee",
    description: "Buy one coffee and get one free. Perfect for coffee lovers!",
    discount: "BOGO",
    code: "COFFEEBOGO",
    expiration: "2025-08-15",
    image: CouponBuy1,
  },
];

const HomeCoupons = () => {
  const [copied, setCopied] = useState("");

  const copyCouponCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(""), 2000); // Reset copied text after 2 seconds
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-5">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold mb-4 text-sky-500">Exclusive Coupons</h2>
        <p className="text-lg text-gray-700">
          Grab the best deals and discounts. Use these codes before they expire!
        </p>
      </div>

      {/* Coupons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                src={coupon.image}
                alt={`Coupon for ${coupon.discount} off`}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white text-xl py-1 px-3 rounded-lg">
                {coupon.discount}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 ">{coupon.title}</h3>
              <p className="text-gray-600 mt-2">{coupon.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">Expires: {coupon.expiration}</span>
                <button
                  onClick={() => copyCouponCode(coupon.code)}
                  className="px-4 py-2 bg-sky-500 text-white rounded-md text-sm"
                >
                  {copied === coupon.code ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCoupons;
