import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyPayments = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://server-site-six-eta.vercel.app/payment/${user?.email}`)
      .then((res) => {
        setPayments(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [user]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
          My Payments
        </h2>
        {payments.length > 0 ? (
          payments.map((payment) => (
            <div key={payment._id} className="space-y-4">
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
          ))
        ) : (
          <p className="text-center text-gray-500">No payments found.</p>
        )}
      </div>
    </div>
  );
};

export default MyPayments;
