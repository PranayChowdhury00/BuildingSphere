import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [member, setMember] = useState(false);

  // Fetch user agreements
  useEffect(() => {
    let isMounted = true;

    const fetchUserAgreements = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/agreements?email=${user.email}`
        );
        if (isMounted) {
          if (response.data.some((agreement) => agreement.role === 'member')) {
            setMember(true);
          }
        }
      } catch (err) {
        console.log("Failed to fetch agreements:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (user) {
      fetchUserAgreements();
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [user]);

  // Check if the user is an admin
  useEffect(() => {
    if (user) {
      const checkAdminRole = async () => {
        try {
          const response = await axios.get("http://localhost:5000/register");
          const foundUser = response.data.find((u) => u.email === user.email);
          if (foundUser && foundUser.role === "admin") {
            setAdmin(true);
          }
        } catch (err) {
          console.log("Error checking admin role:", err);
        }
      };

      checkAdminRole();
    }
  }, [user]);

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="dashboard-layout flex flex-col md:flex-row min-h-screen gap-5">
      {/* Sidebar */}
      <aside className="sidebar w-full md:w-1/4 bg-sky-400 px-5 py-5 md:h-screen overflow-y-auto rounded-lg shadow-lg">
        <ul>
          {/* Conditionally render "My Profile" and "Announcements" if the user is not an admin */}
          {!admin && (
            <>
              <li className="py-3 bg-base-100 px-3 rounded-xl mb-5 hover:bg-sky-300">
                <Link
                  to="/dashboard/profile"
                  className="text-sky-500 font-bold text-xl hover:text-sky-700"
                >
                  My Profile
                </Link>
              </li>
              <li className="py-3 bg-base-100 px-3 rounded-xl mb-5 hover:bg-sky-300">
                <Link
                  to="/dashboard/announcements"
                  className="text-sky-500 font-bold text-xl hover:text-sky-700"
                >
                  Announcements
                </Link>
              </li>
            </>
          )}

          {/* Conditionally render "Make Payment" and "Payment History" */}
          {member && (
            <>
              <li className="py-3 bg-base-100 px-3 rounded-xl mb-5 hover:bg-sky-300">
                <Link
                  to="/dashboard/make-payment"
                  className="text-sky-500 font-bold text-xl hover:text-sky-700"
                >
                  Make Payment
                </Link>
              </li>
              <li className="py-3 bg-base-100 px-3 rounded-xl mb-5 hover:bg-sky-300">
                <Link
                  to="/dashboard/payment-history"
                  className="text-sky-500 font-bold text-xl hover:text-sky-700"
                >
                  Payment History
                </Link>
              </li>
            </>
          )}

          {/* Conditionally render for admin */}
          {admin && (
            <>
              <li className="py-3 bg-base-100 px-3 rounded-xl mb-5 hover:bg-sky-300">
                <NavLink
                  to="/dashboard/adminProfile"
                  className="text-sky-500 font-bold text-xl hover:text-sky-700"
                >
                  Admin Profile
                </NavLink>
              </li>
              <li className="py-3 bg-base-100 px-3 rounded-xl mb-5 hover:bg-sky-300">
                <NavLink
                  to="/dashboard/manage-members"
                  className="text-sky-500 font-bold text-xl hover:text-sky-700"
                >
                  Manage Members
                </NavLink>
              </li>
              <li className="py-3 bg-base-100 px-3 rounded-xl mb-5 hover:bg-sky-300">
                <NavLink
                  to="/dashboard/makeAnnouncements"
                  className="text-sky-500 font-bold text-xl hover:text-sky-700"
                >
                  Make Announcement
                </NavLink>
              </li>
              <li className="py-3 bg-base-100 px-3 rounded-xl mb-5 hover:bg-sky-300">
                <NavLink
                  to="/dashboard/agreementRequest"
                  className="text-sky-500 font-bold text-xl hover:text-sky-700"
                >
                  Agreement Requests
                </NavLink>
              </li>
              <li className="py-3 bg-base-100 px-3 rounded-xl mb-5 hover:bg-sky-300">
                <NavLink
                  to="/dashboard/manage-coupons"
                  className="text-sky-500 font-bold text-xl hover:text-sky-700"
                >
                  Manage Coupons
                </NavLink>
              </li>
            </>
          )}

          <li className="py-3 bg-base-100 px-3 rounded-xl hover:bg-sky-300">
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
