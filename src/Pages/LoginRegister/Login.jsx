import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import logo from "/logo.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { googleSignIn, loader, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="flex items-center">
          <img className="w-24 h-24" src={logo} alt="BuildingSphere" />
          <p className="text-2xl font-medium">BuildingSphere</p>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Hey There!!! Welcome Back.</h1>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-medium text-[18px]">
                  Password <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"} // Toggle type
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* Eye icon */}
              <span
                onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                className="absolute top-[45px] right-3 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-red-500 font-medium"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#6C60FE] font-bold text-white hover:bg-white hover:border-[#6C60FE] hover:text-[#6C60FE]">
                Login
              </button>
            </div>
            <div className="flex items-center justify-center my-3">
              <div className="flex-1 border-t border-gray-300"></div>
              <div className="px-6 text-center">
                <span>Or, Sign in with your email</span>
              </div>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="">
              <button
                onClick={handleGoogle}
                className="w-full bg-base-200 p-2 rounded-lg flex justify-center items-center space-x-2"
              >
                <FcGoogle className="w-6 h-6" />
                <span>Sign in with Google</span>
              </button>
            </div>
            <div className="text-center py-3">
              <p>
                Don't have an account?{" "}
                <Link className="text-red-500" to="/register">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
