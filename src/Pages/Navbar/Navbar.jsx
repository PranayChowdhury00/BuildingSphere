import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "/logo.jpg";
import Swal from "sweetalert2";

//TO DO : i have to add 5 page in nav 2 for login and 3 for normal user

const Navbar = () => {
  const { user, signOutUser, loader } = useContext(AuthContext);

  const handelLogOut = () => {
    signOutUser()
      .then(() => {
        // console.log("User logged out successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "log out done",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((err) => {
        console.error("Logout Error:", err.message);
      })
      .finally(() => {
       
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-sky-500 px-4 py-2 rounded font-medium'
              : 'text-sky-500'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="apartment"
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-sky-500 px-4 py-2 rounded font-medium'
              : 'text-sky-500'
          }
        >
          Apartment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contactUs"
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-sky-500 px-4 py-2 rounded font-medium'
              : 'text-sky-500'
          }
        >
          Contact Us
        </NavLink>
      </li>
      {
        user && <li>
        <NavLink
          to="myPayments"
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-sky-500 px-4 py-2 rounded font-medium'
              : 'text-sky-500'
          }
        >
          My Payments
        </NavLink>
      </li>
      }
      <li>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-sky-500 px-4 py-2 rounded font-medium'
              : 'text-sky-500'
          }
        >
          About Us
        </NavLink>
      </li>
      

    </>
  );

  return (
    <div className="navbar bg-base-200 sticky top-0 z-20 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img className="w-14 h-14 rounded-full" src={logo} alt="BuildingSphere" />
          <p className="text-sky-500 font-semibold text-[18px]">BuildingSphere</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {loader ? (
          // Show loader when active
          <div className="spinner w-6 h-6 border-4 border-dashed rounded-full animate-spin"></div>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <p className="justify-between">{user.displayName}</p>
              </li>
              <li>
                <Link to='dashboard'>Dashboard</Link>
              </li>
              <li>
                <button onClick={handelLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="text-sky-500 font-semibold">LogIn</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
