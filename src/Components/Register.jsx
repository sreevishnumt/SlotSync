import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [selectedValue,setSelectedValue]=useState('user');

  const [userformData, setuserFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [adminformData, setadminFormData] = useState({
    name: "",
    email: "",
    business:"",
    password: "",
  });
  const handleChange = (e) =>{
    setSelectedValue(e.target.value);
  }

  const handleChangeUser = (e) => {
    // setSelectedValue(e.target.value);
    setuserFormData({
      ...userformData,
      [e.target.name]: e.target.value,
    });
    // setadminFormData({
    //   ...adminformData,
    //   [e.target.name]: e.target.value,
    // });
  };
  const handleChangeAdmin = (e)=>{
    // selectedValue(e.target.value);
    setadminFormData({
      ...adminformData,
      [e.target.name]: e.target.value,
    });
  }

//  console.log(selectedValue);
//  console.log(userformData);
//  console.log(adminformData);
 
 const handleSubmit = (e) => {
  e.preventDefault();

  const newAccount = {
    id: Date.now(),
    type: selectedValue,

    ...(selectedValue === "user"
      ? userformData
      : adminformData),
  };

  // Old Accounts
  const oldAccounts =
    JSON.parse(localStorage.getItem("accounts")) || [];

  // Add New Account
  const updatedAccounts = [
    ...oldAccounts,
    newAccount,
  ];

  // Save
  localStorage.setItem(
    "accounts",
    JSON.stringify(updatedAccounts)
  );

  alert("Registration Successful");

  navigate("/login");
};

  return (
    <div className="min-h-screen bg-cyan-500 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-cyan-600 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Register to continue
        </p>
        <select value={selectedValue} onChange={handleChange} className="text-xl font-bold text-blue-400 mb-2">
          <option value="user">Client</option>
          <option value="admin">Business</option>
        </select>

        {selectedValue==="user" ?(
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={userformData.name}
              onChange={handleChangeUser}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userformData.email}
              onChange={handleChangeUser}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={userformData.password}
              onChange={handleChangeUser}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            Register
          </button>
        </form>
        ):(
          <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={adminformData.name}
              onChange={handleChangeAdmin}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={adminformData.email}
              onChange={handleChangeAdmin}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Business
            </label>

            <input
              type="text"
              name="business"
              placeholder="Enter your business"
              value={adminformData.business}
              onChange={handleChangeAdmin}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={adminformData.password}
              onChange={handleChangeAdmin}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            Register
          </button>
        </form>
        )} 

        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
