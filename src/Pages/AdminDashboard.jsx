import React, { useEffect, useState } from "react";

function AdminDashboard() {

  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {

    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(savedBookings);

  }, []);

  // Complete Booking
  const handleComplete = (id) => {

    const updatedBookings =
      bookings.map((booking) =>

        booking.bookingId === id
          ? {
              ...booking,
              status: "Completed",
            }
          : booking
      );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  return (
    <div className="min-h-screen bg-cyan-50 p-8">

      <h1 className="text-4xl font-bold text-cyan-700 mb-10">
        Admin Dashboard
      </h1>

      <div className="grid gap-6">

        {bookings.map((booking) => (

          <div
            key={booking.bookingId}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >

            <h2 className="text-2xl font-bold text-cyan-700">
              {booking.userName}
            </h2>

            <div className="mt-4 space-y-2">

              <p>
                <span className="font-semibold">
                  Service:
                </span>{" "}
                {booking.serviceName}
              </p>

              <p>
                <span className="font-semibold">
                  Booking Date:
                </span>{" "}
                {booking.bookingDate}
              </p>

              <p>
                <span className="font-semibold">
                  Booking Time:
                </span>{" "}
                {booking.bookingTime}
              </p>

              <p>
                <span className="font-semibold">
                  Status:
                </span>{" "}

                <span
                  className={
                    booking.status === "Completed"
                      ? "text-green-600 font-bold"
                      : booking.status === "Canceled"
                      ? "text-red-600 font-bold"
                      : "text-yellow-600 font-bold"
                  }
                >
                  {booking.status}
                </span>
              </p>
            </div>

            {/* Completed Button */}
            {booking.status === "Pending" && (

              <button
                onClick={() =>
                  handleComplete(
                    booking.bookingId
                  )
                }
                className="mt-6 bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
              >
                Completed
              </button>

            )}
          </div>

        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;