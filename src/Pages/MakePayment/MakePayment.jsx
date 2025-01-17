import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MakePayment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [month, setMonth] = useState("");


  const {
    data: agreement = null,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["agreement", user?.email], 
    queryFn: async () => {
      if (!user?.email) return null; 
      const response = await axios.get(
        `https://server-site-six-eta.vercel.app/agreements?email=${user.email}`
      );
      return response.data?.[0] || null; 
    },
    enabled: !!user?.email, 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment-page");
  };

  if (isLoading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        <p>Failed to fetch agreement data: {error.message}</p>
      </div>
    );
  }

  if (!agreement) {
    return (
      <div className="text-center text-xl">
        <p>No agreement data found for the current user.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
        Make Payment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Member Email:</label>
          <input
            type="text"
            value={agreement.email}
            readOnly
            className="p-2 border rounded-md bg-gray-100 text-gray-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Floor:</label>
          <input
            type="text"
            value={agreement.floorNo}
            readOnly
            className="p-2 border rounded-md bg-gray-100 text-gray-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Block Name:</label>
          <input
            type="text"
            value={agreement.blockName}
            readOnly
            className="p-2 border rounded-md bg-gray-100 text-gray-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">
            Apartment No/Room No:
          </label>
          <input
            type="text"
            value={agreement.apartmentNo}
            readOnly
            className="p-2 border rounded-md bg-gray-100 text-gray-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Rent:</label>
          <input
            type="text"
            value={`$${agreement.rent}`}
            readOnly
            className="p-2 border rounded-md bg-gray-100 text-gray-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Month:</label>
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
            className="p-2 border rounded-md bg-gray-100 text-gray-600"
          />
        </div>

        <Link to="/dashboard/payMentPage">
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded-md mt-4 hover:bg-green-700"
          >
            Pay
          </button>
        </Link>
      </form>
    </div>
  );
};

export default MakePayment;
