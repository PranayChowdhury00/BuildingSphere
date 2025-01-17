import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import logo from "/logo.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2"; // Import SweetAlert2
import axios from "axios";

const Register = () => {
  const { createNewUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase) {
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one uppercase letter.",
      });
      return false;
    }

    if (!hasLowercase) {
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one lowercase letter.",
      });
      return false;
    }

    if (!hasMinLength) {
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must be at least 6 characters long.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;

    //send data in db

    const user = { name, email, password, photoUrl };
    axios
      .post("https://server-site-six-eta.vercel.app/register", user)
      .then((res) => {
        
        Swal.fire({
          icon: "success",
          title: "User Registered",
          text: "Your account has been successfully registered!",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text:
            error.response?.data?.message ||
            "An error occurred while registering.",
        });
      });

    // Validate password before proceeding
    if (!validatePassword(password)) {
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update the user's profile
        return updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        });
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Your account has been created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        e.target.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Google Sign-In Successful",
          text: "Welcome to the application!",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col w-[700px]">
        <div className="flex items-center">
          <img className="w-24 h-24" src={logo} alt="BuildingSphere" />
          <p className="text-2xl font-medium">BuildingSphere</p>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">
            Signup! <br />
            New Account.
          </h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <p className="label-text font-medium text-[18px]">
                  Name <span className="text-red-500">*</span>
                </p>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <p className="label-text font-medium text-[18px]">
                  Email <span className="text-red-500">*</span>
                </p>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <p className="label-text font-medium text-[18px]">
                  Photo URL <span className="text-red-500">*</span>
                </p>
              </label>
              <input
                name="photoUrl"
                type="url"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-medium text-[18px]">
                  Password <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[45px] right-3 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#6C60FE] font-bold text-white hover:bg-white hover:border-[#6C60FE] hover:text-[#6C60FE]">
                Sign Up
              </button>
            </div>
            <div className="flex items-center justify-center my-3">
              <div className="flex-1 border-t border-gray-300"></div>
              <div className="px-6 text-center">
                <span>Or, Sign Up with your email</span>
              </div>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div>
              <button
                onClick={handleGoogle}
                className="hover:text-gray-900 hover:font-medium hover:bg-base-300 w-full bg-base-200 p-2 rounded-lg flex justify-center items-center space-x-2"
              >
                <FcGoogle className="w-6 h-6" />
                <span>Sign in with Google</span>
              </button>
            </div>
            <div className="text-center py-3">
              <p>
                Already have an account?{" "}
                <Link className="text-red-500" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
