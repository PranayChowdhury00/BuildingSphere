import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function CouponsTable() {
  const [coupons, setCoupons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discountPercentage: "",
    couponDescription: "",
  });

  useEffect(() => {
    // Fetch coupons from the server
    fetch("http://localhost:5000/api/getCoupons")
      .then((response) => response.json())
      .then((data) => setCoupons(data));
  }, []);

  const handleAddCoupon = () => {
    fetch("http://localhost:5000/api/addCoupon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCoupon),
    })
      .then((response) => response.json())
      .then(() => {
        setShowModal(false);
        setNewCoupon({ code: "", discountPercentage: "", couponDescription: "" });

        // Show SweetAlert
        Swal.fire({
          title: "Success!",
          text: "Coupon added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Refresh coupon list
        fetch("http://localhost:5000/api/getCoupons")
          .then((response) => response.json())
          .then((data) => setCoupons(data));
      })
      .catch(() => {
        // Show error alert if adding coupon fails
        Swal.fire({
          title: "Error!",
          text: "Failed to add coupon. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Coupons Management</h1>
      <button
        className="btn btn-primary"
        onClick={() => setShowModal(true)}
      >
        Add Coupon
      </button>
      <table className="table w-full mt-6 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Code</th>
            <th className="border border-gray-300 p-2">Discount Percentage</th>
            <th className="border border-gray-300 p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon._id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{coupon.code}</td>
              <td className="border border-gray-300 p-2">{coupon.discountPercentage}</td>
              <td className="border border-gray-300 p-2">{coupon.couponDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Coupon</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="input input-bordered w-full"
                value={newCoupon.code}
                onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Discount Percentage"
                className="input input-bordered w-full"
                value={newCoupon.discountPercentage}
                onChange={(e) =>
                  setNewCoupon({ ...newCoupon, discountPercentage: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Coupon Description"
                className="textarea textarea-bordered w-full"
                value={newCoupon.couponDescription}
                onChange={(e) =>
                  setNewCoupon({ ...newCoupon, couponDescription: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="btn btn-success"
                onClick={handleAddCoupon}
              >
                Submit
              </button>
              <button
                className="btn btn-error"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CouponsTable;
