import React from "react";

function UserProfile() {

  // Get Logged User
  const loggedUser = JSON.parse(
    localStorage.getItem("loggedUser")
  );
  console.log(loggedUser)

  return (
    <div className="min-h-screen bg-cyan-50 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl">

        <div className="flex flex-col items-center">

          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full bg-cyan-500 flex items-center justify-center text-white text-5xl font-bold">

            {loggedUser?.type === "admin"
              ? "A"
              : "U"}

          </div>

          {/* Name */}
          <h1 className="text-4xl font-bold text-cyan-700 mt-6">

            {loggedUser?.type === "admin"
              ? loggedUser.business
              : loggedUser.name}

          </h1>

          {/* Role */}
          <p className="text-gray-500 text-lg mt-2 capitalize">
            {loggedUser?.type} Account
          </p>
        </div>

        {/* User Details */}
        <div className="mt-10 space-y-5">

          <div className="bg-cyan-50 rounded-xl p-4">

            <p className="text-gray-500 text-sm">
              Email
            </p>

            <h2 className="text-lg font-semibold text-gray-700">
              {loggedUser?.email}
            </h2>
          </div>

          <div className="bg-cyan-50 rounded-xl p-4">

            <p className="text-gray-500 text-sm">
              Account Type
            </p>

            <h2 className="text-lg font-semibold text-gray-700 capitalize">
              {loggedUser?.type}
            </h2>
          </div>

          <div className="bg-cyan-50 rounded-xl p-4">

            <p className="text-gray-500 text-sm">
              User ID
            </p>

            <h2 className="text-lg font-semibold text-gray-700">
              {loggedUser?.id}
            </h2>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">

          <button
            onClick={() => {
              localStorage.removeItem(
                "loggedUser"
              );

              window.location.href = "/login";
            }}
            className="bg-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;