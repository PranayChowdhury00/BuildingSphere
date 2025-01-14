import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "../StripePayment/CheckOutFrom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment);

const PaymentPage = () => {
    const {user}=useContext(AuthContext);
  const [couponCode, setCouponCode] = useState("");
  const [discountedRent, setDiscountedRent] = useState(null);
  const [isCouponValid, setIsCouponValid] = useState(false);
  const [agreement, setAgreement] = useState(null);

  useEffect(() => {
    const fetchAgreement = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/agreements?email=${user?.email}`
        );
        if (response.data && response.data.length > 0) {
          setAgreement(response.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch agreement data:", error);
      }
    };
    fetchAgreement();
  }, [user?.email]);
  
  // Handle coupon validation and rent calculation
  const handleCouponApply = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/validateCoupon",
        { couponCode }
      );
      if (response.data.valid) {
        setDiscountedRent(
          agreement.rent -
            (agreement.rent * response.data.discountPercentage) / 100
        );
        setIsCouponValid(true);
      } else {
        alert("Invalid coupon code");
        setIsCouponValid(false);
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">Apply Coupon</h2>
      
      {/* Coupon Code Field */}
      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Coupon Code:</label>
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="p-2 border rounded-md bg-gray-100 text-gray-600"
        />
      </div>
      
      <button
        type="button"
        onClick={handleCouponApply}
        className="w-full py-2 bg-indigo-600 text-white rounded-md mt-2 hover:bg-indigo-700"
      >
        Apply Coupon
      </button>

      <div className="mt-2">
        {isCouponValid && discountedRent && (
          <p className="text-green-600">Discounted Rent: ${discountedRent}</p>
        )}
      </div>

      {/* Payment button */}

      <Elements stripe={stripePromise}>
        <CheckOutFrom></CheckOutFrom>
      </Elements>
    </div>
  );
};

export default PaymentPage;
