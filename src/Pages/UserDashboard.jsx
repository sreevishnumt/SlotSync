import React, { useEffect, useState } from "react";

function UserDashboard() {

  const loggedUser = JSON.parse(
    localStorage.getItem("loggedUser")
  );

  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {

    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    // Current User Bookings
    const userBookings =
      savedBookings.filter(
        (booking) =>
          booking.userId === loggedUser.id
      );

    setBookings(userBookings);

  }, []);

  // Cancel Booking
  const handleCancel = (id) => {

    const allBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const updatedBookings =
      allBookings.map((booking) =>

        booking.bookingId === id
          ? {
              ...booking,
              status: "Canceled",
            }
          : booking
      );

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(
      updatedBookings.filter(
        (booking) =>
          booking.userId === loggedUser.id
      )
    );
  };

  return (
    <div className="min-h-screen bg-cyan-50 p-8">

      <h1 className="text-4xl font-bold text-cyan-700 mb-10">
        User Dashboard
      </h1>

      <div className="grid gap-6">

        {bookings.map((booking) => (

          <div
            key={booking.bookingId}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >

            <h2 className="text-2xl font-bold text-cyan-700">
              {booking.serviceName}
            </h2>

            <div className="mt-4 space-y-2">

              <p>
                <span className="font-semibold">
                  Booking Number:
                </span>{" "}
                {booking.bookingId}
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

            {/* Cancel Button */}
            {booking.status === "Pending" && (

              <button
                onClick={() =>
                  handleCancel(
                    booking.bookingId
                  )
                }
                className="mt-6 bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition"
              >
                Cancel Booking
              </button>

            )}
          </div>

        ))}
      </div>
    </div>
  );
}

export default UserDashboard;