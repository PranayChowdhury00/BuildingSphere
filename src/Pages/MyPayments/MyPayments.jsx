import React from "react";

const MyPayments = () => {
  // Sample payment data (replace with fetched API data)
  const payment = {
    email: "pranaypk130@gmail.com",
    price: 800,
    transactionId: "pi_3QhP9aHItS5yrmGg1o6t6btj",
    date: "2025-01-15T05:28:49.342Z",
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">My Payments</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <p className="text-lg font-medium text-sky-500">Email:</p>
            <p className="text-gray-700">{payment.email}</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-lg font-medium text-sky-500">Amount Paid:</p>
            <p className="text-gray-700">${payment.price}</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-lg font-medium text-sky-500">Transaction ID:</p>
            <p className="text-gray-700">{payment.transactionId}</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-lg font-medium text-sky-500">Payment Date:</p>
            <p className="text-gray-700">{new Date(payment.date).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPayments;
