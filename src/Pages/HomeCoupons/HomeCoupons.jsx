import { useEffect, useState } from "react";
import axios from "axios";

const HomeCoupons = () => {
  const [copied, setCopied] = useState("");
  const [coupons, setCoupons] = useState([]);

  const copyCouponCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(""), 2000);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/getCoupons").then((res) => {
      setCoupons(res.data);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-5">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold mb-4 text-sky-500">
          Exclusive Coupons
        </h2>
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
            <div className="p-6">
              <p className="text-gray-600 mt-2">{coupon.couponDescription}</p>
              <p className="text-xl text-sky-800">
                Discount Percentage: {coupon.discountPercentage}%
              </p>
              <div className="mt-4 flex items-center justify-between">
                {/* Conditional Text Color Based on Availability */}
                <span
                  className={`text-xl ${
                    coupon.availability === "Available"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  Availability: {coupon.availability}
                </span>
                <button
                  onClick={() => copyCouponCode(coupon.code)}
                  className="px-4 py-2 bg-sky-500 text-white rounded-md text-sm"
                  disabled={coupon.availability === "Unavailable"} // Disable if unavailable
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
