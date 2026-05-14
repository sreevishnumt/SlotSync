import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  const isLogin = false;

  return (
    <>
      <div className="min-h-screen bg-cyan-500 text-white px-6 py-6">

        {/* Top Navbar */}
        <nav className="flex justify-end">
          <Link to="/login">
            <button className="bg-white text-cyan-600 px-5 py-2 rounded-lg font-semibold">
              {isLogin ? "Dashboard" : "Login"}
            </button>
          </Link>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center text-center h-[85vh]">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to SlotSync
          </h1>

          <Link to={isLogin ? "/dashboard" : "/login"}>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-xl text-lg font-semibold">
              Get Started
            </button>
          </Link>

          <p className="mt-8 text-lg max-w-2xl">
            Easily book, manage, and track appointments with our smart
            appointment and queue management system.
          </p>
        </div>
      </div>

      {/* Child Routes Render Here */}
      <Outlet />
    </>
  );
}

export default Home;
