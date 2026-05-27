import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";

function UserHome() {
  const navigate = useNavigate();
  // Service Data
  // const services = [
  //   {
  //     id: 1,
  //     name: "Doctor",
  //     time: "9:00 AM - 8:00 PM",
  //     contact: "+91 9876543210",
  //     location: "Kochi",
  //     rating: "4.8",
  //   },
  //   {
  //     id: 2,
  //     name: "Lawyer",
  //     time: "10:00 AM - 6:00 PM",
  //     contact: "+91 9123456780",
  //     location: "Calicut",
  //     rating: "4.5",
  //   },
  //   {
  //     id: 3,
  //     name: "Plumber",
  //     time: "8:00 AM - 7:00 PM",
  //     contact: "+91 9988776655",
  //     location: "Thrissur",
  //     rating: "4.2",
  //   },
  //   {
  //     id: 4,
  //     name: "Carpenter",
  //     time: "9:30 AM - 5:30 PM",
  //     contact: "+91 9871234567",
  //     location: "Malappuram",
  //     rating: "4.6",
  //   },
  //   {
  //     id: 5,
  //     name: "Painter",
  //     time: "8:30 AM - 6:30 PM",
  //     contact: "+91 9090909090",
  //     location: "Palakkad",
  //     rating: "4.1",
  //   },
  // ];
  const loggedUser = JSON.parse(
      localStorage.getItem("loggedUser")) || [];
  const savedServices =
  JSON.parse(localStorage.getItem("services")) || [];

  // Feedback Form
  const [feedback, setFeedback] = useState({
    name: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleDashboard = () =>{
    // const loggedUser = JSON.parse(
    //   localStorage.getItem("accounts")
    // );
    console.log(loggedUser)
     // Check User Type
  if (loggedUser.type === "user") {
    // navigate("/usdashboard");
    navigate("/usdashboard");
  } else {
    navigate("/addashboard");
  }
  }

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Feedback Submitted Successfully");

    setFeedback({
      name: "",
      message: "",
    });
  };

  return (
    <div className="flex min-h-screen bg-cyan-50">

      {/* Sidebar */}
      <div className="w-72 bg-cyan-600 text-white p-6">

        <h1 className="text-3xl font-bold mb-10">
          SlotSync
        </h1>

        <ul className="space-y-5">

          <li className="bg-cyan-700 px-4 py-3 rounded-xl cursor-pointer font-medium">
            <Link>🏠 User Home</Link>
            
          </li>

          {/* <li className="hover:bg-cyan-700 px-4 py-3 rounded-xl cursor-pointer transition font-medium">
            <Link>💼 Service Details</Link>
            
          </li> */}

          <li onClick={handleDashboard} className="hover:bg-cyan-700 px-4 py-3 rounded-xl cursor-pointer transition font-medium">
            {/* <Link to={"/usdashboard"}>📊 Dashboard</Link> */}
            📊 Dashboard
          </li>

          {/* <li className="hover:bg-cyan-700 px-4 py-3 rounded-xl cursor-pointer transition font-medium">
            <Link>📞 Customer Care</Link>
            
          </li> */}
          <li
            onClick={() => navigate("/customercare")}
            className="hover:bg-cyan-700 px-4 py-3 rounded-xl cursor-pointer transition font-medium"
          >
            📞 Customer Care
          </li>

          {/* <li className="hover:bg-cyan-700 px-4 py-3 rounded-xl cursor-pointer transition font-medium">
            <Link>👤 User Profile</Link>
            
          </li> */}
          <li
            onClick={() => navigate("/profile")}
            className="hover:bg-cyan-700 px-4 py-3 rounded-xl cursor-pointer transition font-medium"
          >
            👤 User Profile
          </li>
          <li onClick={() => {
              localStorage.removeItem(
                "loggedUser"
              );

              window.location.href = "/login";
            }}
          className="hover:bg-cyan-700 px-4 py-3 rounded-xl cursor-pointer transition font-medium">
            {/* <Link to={"/login"}>Log Out</Link> */}
            Log Out
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-4xl font-bold text-cyan-700">
            Available Services
          </h1>

          <p className="text-gray-600 mt-3">
            Find trusted professionals and book services easily.
          </p>
        </div>

        {/* Service Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition"
            >

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold text-cyan-700">
                  {service.name}
                </h2>

                <div className="text-yellow-500 font-semibold">
                  ⭐ {service.rating}
                </div>
              </div>

              <div className="mt-5 space-y-3 text-gray-700">

                <p>
                  <span className="font-semibold">
                    Opening Hours:
                  </span>{" "}
                  {service.time}
                </p>

                <p>
                  <span className="font-semibold">
                    Contact:
                  </span>{" "}
                  {service.contact}
                </p>

                <p>
                  <span className="font-semibold">
                    Location:
                  </span>{" "}
                  {service.location}
                </p>
              </div>

              <button className="mt-6 w-full bg-cyan-500 text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition">
                View Details
              </button>
            </div>
          ))}
        </div> */}
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

          {/* Add New Service Card */}
          {loggedUser?.type==="admin" &&(
          <div
            // onClick={() => navigate("/serviceform")}
            onClick={() =>{
              if (loggedUser?.type==="admin"){
                  navigate("/serviceform")
              }else{
                alert("You are not admin user")
              }
            } }
            className="bg-white border-2 border-dashed border-cyan-400 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-cyan-50 transition min-h-[280px]"
          >
            <h1 className="text-6xl text-cyan-500">
              +
            </h1>

            <p className="mt-4 text-xl font-semibold text-cyan-700">
              Add New Service
            </p>
          </div>
          )}

          {/* Show Services Only If Available */}
          {savedServices.length > 0 &&
            savedServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition"
              >

                <div className="flex justify-between items-center">

                  <h2 className="text-2xl font-bold text-cyan-700">
                    {service.name}
                  </h2>

                  <div className="text-yellow-500 font-semibold">
                    ⭐ {service.rating}
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-gray-700">

                  <p>
                    <span className="font-semibold">
                      Opening Hours:
                    </span>{" "}
                    {service.opening} - {service.closing}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Contact:
                    </span>{" "}
                    {service.contact}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Location:
                    </span>{" "}
                    {service.location}
                  </p>
                </div>

                <button onClick={() =>
                    navigate("/servicedetails", {
                      state: service,
                    })
                  }className="mt-6 w-full bg-cyan-500 text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition">
                  View Details
                </button>
              </div>
            ))}
        </div>

        {/* Feedback Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-14 max-w-3xl">

          <h2 className="text-3xl font-bold text-cyan-700 mb-6">
            Feedback
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={feedback.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Feedback Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={feedback.message}
                onChange={handleChange}
                placeholder="Write your feedback..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-16 bg-cyan-600 text-white rounded-2xl p-6 text-center">

          <h3 className="text-2xl font-bold">
            SlotSync
          </h3>

          <p className="mt-3">
            © 2026 All Rights Reserved
          </p>

          <p className="mt-2 text-sm">
            Contact: support@slotsync.com
          </p>
        </footer>
      </div>
    </div>
  );
}

export default UserHome;