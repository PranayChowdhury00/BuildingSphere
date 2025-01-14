import React, { useContext, useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from 'axios';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [hasAgreement, setHasAgreement] = useState(false);
  const [loading, setLoading] = useState(true); // Track loading state

  // Check if the user has submitted any agreements
  useEffect(() => {
    if (user) {
      const fetchUserAgreements = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/agreements?email=${user.email}`
          );
          if (response.data && response.data.length > 0) {
            setHasAgreement(true);
          }
        } catch (err) {
          console.log("Failed to fetch agreements:", err);
        } finally {
          setLoading(false); // Stop loading when the request is finished
        }
      };

      fetchUserAgreements();
    } else {
      setLoading(false); // Stop loading if there's no user
    }
  }, [user]);

  // Redirect to login if user is not authenticated
  if (!user) {
    navigate("/login");
    return null; // Prevent rendering the rest of the component
  }

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    ); // Show loading spinner while fetching agreements
  }

  return (
    <div className="dashboard-layout flex flex-col md:flex-row min-h-screen gap-5">
      {/* Sidebar */}
      <aside className="sidebar w-full md:w-1/4 bg-sky-400 px-5 py-5 md:h-screen overflow-y-auto">
        <ul>
          <li className="py-3 bg-base-100 px-3 rounded-xl mb-5">
            <Link
              to="/dashboard/profile"
              className="text-sky-500 font-bold text-xl hover:text-sky-700"
            >
              My Profile
            </Link>
          </li>
          <li className="py-3 bg-base-100 px-3 rounded-xl mb-5">
            <Link
              to="/dashboard/announcements"
              className="text-sky-500 font-bold text-xl hover:text-sky-700"
            >
              Announcements
            </Link>
          </li>
          {/* Conditionally render "Make Payment" and "Payment History" */}
          {hasAgreement && (
            <>
              <li className="py-3 bg-base-100 px-3 rounded-xl mb-5">
                <Link
                  to="/dashboard/make-payment"
                  className="text-sky-500 font-bold text-xl hover:text-sky-700"
                >
                  Make Payment
                </Link>
              </li>
              <li className="py-3 bg-base-100 px-3 rounded-xl mb-5">
                <Link
                  to="/dashboard/payment-history"
                  className="text-sky-500 font-bold text-xl hover:text-sky-700"
                >
                  Payment History
                </Link>
              </li>
            </>
          )}
          <li className="py-3 bg-base-100 px-3 rounded-xl">
            <Link
              className="text-sky-500 font-bold text-xl hover:text-sky-700"
              to="/"
            >
              Home
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content w-full md:w-3/4 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboard;
