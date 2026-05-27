import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ServiceDetails() {

  const location = useLocation();

  const navigate = useNavigate();

  // Selected Service Data
  const service = location.state;

  // Current User
  const loggedUser = JSON.parse(
    localStorage.getItem("loggedUser")
  );
console.log(loggedUser)
  // Booking Function
//   const handleBooking = () => {

//     const newBooking = {
//       bookingId: Date.now(),

//       userId: loggedUser.id,

//       userName:
//         loggedUser.name ||
//         loggedUser.businessName,

//       serviceId: service.id,

//       serviceName: service.name,

//       location: service.location,

//       contact: service.contact,

//       bookingTime: new Date().toLocaleString(),
//     };

//     // Old Bookings
//     const oldBookings =
//       JSON.parse(localStorage.getItem("bookings")) || [];

//     // Updated Bookings
//     const updatedBookings = [
//       ...oldBookings,
//       newBooking,
//     ];

//     // Save
//     localStorage.setItem(
//       "bookings",
//       JSON.stringify(updatedBookings)
//     );

//     alert("Booking Successful");

//     navigate("/usdashboard");
//   };
    const handleBooking = () => {

    const newBooking = {
        bookingId: Date.now(),

        userId: loggedUser.id,

        userName:
        loggedUser.name ||
        loggedUser.businessName,

        userEmail: loggedUser.email,

        serviceName: service.name,

        serviceLocation: service.location,

        bookingDate:
        new Date().toLocaleDateString(),

        bookingTime:
        new Date().toLocaleTimeString(),

        status: "Pending",
    };

    // Old Bookings
    const oldBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    // Save
    localStorage.setItem(
        "bookings",
        JSON.stringify([
        ...oldBookings,
        newBooking,
        ])
    );

    alert("Booking Successful");

    navigate("/usdashboard");
    };

  return (
    <div className="min-h-screen bg-cyan-50 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl">

        {/* Header */}
        <h1 className="text-4xl font-bold text-cyan-700">
          {service.name}
        </h1>

        <p className="text-gray-500 mt-3">
          Service Details
        </p>

        {/* Details */}
        <div className="mt-10 space-y-5">

          <div className="bg-cyan-50 p-5 rounded-xl">
            <p className="text-gray-500">
              Service Type
            </p>

            <h2 className="text-xl font-semibold">
              {service.type}
            </h2>
          </div>

          <div className="bg-cyan-50 p-5 rounded-xl">
            <p className="text-gray-500">
              Location
            </p>

            <h2 className="text-xl font-semibold">
              {service.location}
            </h2>
          </div>

          <div className="bg-cyan-50 p-5 rounded-xl">
            <p className="text-gray-500">
              Contact Number
            </p>

            <h2 className="text-xl font-semibold">
              {service.contact}
            </h2>
          </div>

          <div className="bg-cyan-50 p-5 rounded-xl">
            <p className="text-gray-500">
              Opening Time
            </p>

            <h2 className="text-xl font-semibold">
              {service.opening}
            </h2>
          </div>

          <div className="bg-cyan-50 p-5 rounded-xl">
            <p className="text-gray-500">
              Closing Time
            </p>

            <h2 className="text-xl font-semibold">
              {service.closing}
            </h2>
          </div>

          <div className="bg-cyan-50 p-5 rounded-xl">
            <p className="text-gray-500">
              Rating
            </p>

            <h2 className="text-xl font-semibold">
              ⭐ {service.rating}
            </h2>
          </div>

          <div className="bg-cyan-50 p-5 rounded-xl">
            <p className="text-gray-500">
              Description
            </p>

            <h2 className="text-xl font-semibold">
              {service.description}
            </h2>
          </div>
        </div>

        {/* Booking Button */}
        {loggedUser?.type==="user" &&(
        <button
          onClick={handleBooking}
          className="w-full mt-10 bg-cyan-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-cyan-600 transition"
        >
          Book Service
        </button>
        )}
         {/* Delete Button */}
         {loggedUser?.type==="admin" &&(
        <button
            onClick={() => {

            // Get Services
            const oldServices =
                JSON.parse(localStorage.getItem("services")) || [];

            // Remove Selected Service
            const updatedServices =
                oldServices.filter(
                (item) => item.id !== service.id
                );

            // Save Updated Data
            localStorage.setItem(
                "services",
                JSON.stringify(updatedServices)
            );

            alert("Service Deleted Successfully");

            navigate("/userhome");
            }}

            className="w-full mt-10 bg-red-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-red-600 transition"
        >
            Delete Service
        </button>
        )}
      </div>
    </div>
  );
}

export default ServiceDetails;