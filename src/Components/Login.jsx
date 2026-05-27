import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Dummy Login Validation
  //   if (
  //     formData.email === "admin@gmail.com" &&
  //     formData.password === "12345"
  //   ) {
  //     alert("Login Successful");
  //     navigate("/addashboard");
  //   } else {
  //     // alert("Invalid Email or Password");
  //     alert("Login Successful");
  //     // navigate("/usdashboard");
  //     navigate("/userhome");
  //   }
  // };
  const handleSubmit = (e) => {
  e.preventDefault();

  // Get Registered Accounts
  const accounts =
    JSON.parse(localStorage.getItem("accounts")) || [];

  // Find Matching Account
  const validUser = accounts.find(
    (account) =>
      account.email === formData.email &&
      account.password === formData.password 
      // account.type === loginType
  );

  if (validUser) {
    alert("Login Successful");
    console.log(accounts)
    // // User Login
    // if (validUser.type === "user") {
    //   navigate("/userhome");
    // }

    // // Admin/Business Login
    // else {
    //   navigate("/addashboard");
    // }
      // Save Current Logged User
  localStorage.setItem(
    "loggedUser",
    JSON.stringify(validUser)
  );
    navigate("/userhome");
  } else {
    alert("Invalid Email or Password");
  }
};

  return (
    <div className="min-h-screen bg-cyan-500 flex items-center justify-center px-4">
      
      {/* Login Card */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-cyan-600 mb-2">
          Appointment System
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            Login
          </button>
        </form>

        {/* Bottom Links */}
        <div className="flex justify-between items-center mt-6 text-sm">
          <Link
            to="/forgot-password"
            className="text-cyan-600 hover:underline"
          >
            Forgot Password?
          </Link>

          <Link
            to="/register"
            className="text-cyan-600 hover:underline"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;