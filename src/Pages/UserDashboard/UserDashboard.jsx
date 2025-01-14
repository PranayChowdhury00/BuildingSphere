import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserDashboard = () => {
  const { loader } = useContext(AuthContext);
  if (loader) {
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
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
          <li className="py-3 bg-base-100 px-3 rounded-xl">
            <Link
             className="text-sky-500 font-bold text-xl hover:text-sky-700"
             to='/'>Home</Link>
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
