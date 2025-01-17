import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function CouponsTable() {
  const [coupons, setCoupons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discountPercentage: "",
    couponDescription: "",
    availability: "Available",
  });

  useEffect(() => {
    setLoading(true);
    fetch("https://server-site-six-eta.vercel.app/api/getCoupons")
      .then((response) => response.json())
      .then((data) => setCoupons(data))
      .catch((error) => console.error("Error fetching coupons:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleAddCoupon = () => {
    setLoading(true);
    fetch("https://server-site-six-eta.vercel.app/api/addCoupon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCoupon),
    })
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            title: "Success",
            text: "New coupon added",
            showConfirmButton: false,
            timer: 1500,
          });
          setShowModal(false);
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add coupon. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      })
      .finally(() => setLoading(false));
  };

  const handleUpdateAvailability = (id, status) => {
    fetch(`https://server-site-six-eta.vercel.app/api/updateCoupon/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ availability: status }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCoupons((prevCoupons) =>
            prevCoupons.map((coupon) =>
              coupon._id === id ? { ...coupon, availability: status } : coupon
            )
          );
          Swal.fire({
            title: "Success!",
            text: `Coupon marked as ${status}.`,
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          throw new Error("Failed to update coupon status.");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Could not update coupon status. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error("Error updating availability:", error);
      });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Coupons Management</h1>
      {loading && (
        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      )}
      <button
        className="btn btn-primary mb-4"
        onClick={() => setShowModal(true)}
        disabled={loading}
      >
        Add Coupon
      </button>
      {!loading && (
        <table className="table w-full mt-6 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Code</th>
              <th className="border border-gray-300 p-2">Discount Percentage</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{coupon.code}</td>
                <td className="border border-gray-300 p-2">
                  {coupon.discountPercentage}
                </td>
                <td className="border border-gray-300 p-2">
                  {coupon.couponDescription}
                </td>
                <td className="border border-gray-300 p-2 flex gap-2">
                  <button
                    className={`btn ${
                      coupon.availability === "Available"
                        ? "btn-success"
                        : "btn-outline"
                    }`}
                    onClick={() =>
                      handleUpdateAvailability(coupon._id, "Available")
                    }
                  >
                    Available
                  </button>
                  <button
                    className={`btn ${
                      coupon.availability === "Unavailable"
                        ? "btn-error"
                        : "btn-outline"
                    }`}
                    onClick={() =>
                      handleUpdateAvailability(coupon._id, "Unavailable")
                    }
                  >
                    Unavailable
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
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
                onChange={(e) =>
                  setNewCoupon({ ...newCoupon, code: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Discount Percentage"
                className="input input-bordered w-full"
                value={newCoupon.discountPercentage}
                onChange={(e) =>
                  setNewCoupon({
                    ...newCoupon,
                    discountPercentage: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Coupon Description"
                className="textarea textarea-bordered w-full"
                value={newCoupon.couponDescription}
                onChange={(e) =>
                  setNewCoupon({
                    ...newCoupon,
                    couponDescription: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-4">
              <select
                className="select select-bordered w-full"
                value={newCoupon.availability}
                onChange={(e) =>
                  setNewCoupon({
                    ...newCoupon,
                    availability: e.target.value,
                  })
                }
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button className="btn btn-success" onClick={handleAddCoupon}>
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
