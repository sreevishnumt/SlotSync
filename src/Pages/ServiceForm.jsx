import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ServiceForm() {

  const navigate = useNavigate();

  const loggedUser = JSON.parse(
  localStorage.getItem("loggedUser")
);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    location: "",
    contact: "",
    opening: "",
    closing: "",
    rating: "",
    description: "",
  });

  // Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

      if (
            formData.name.toLowerCase() !==
            loggedUser.business.toLowerCase()
        ) {

            alert(
            "Enter same service name when you are logged"
            );

            return;
        }

    // New Service Object
    const newService = {
      id: Date.now(),
      ...formData,
    };

    // Existing Services
    const oldServices =
      JSON.parse(localStorage.getItem("services")) || [];

    // Updated Services
    const updatedServices = [
      ...oldServices,
      newService,
    ];

    // Save to LocalStorage
    localStorage.setItem(
      "services",
      JSON.stringify(updatedServices)
    );

    alert("Service Added Successfully");

    // Clear Form
    setFormData({
      name: "",
      type: "",
      location: "",
      contact: "",
      opening: "",
      closing: "",
      rating: "",
      description: "",
    });

    // Navigate Back
    navigate("/userhome");
  };

  return (
    <div className="min-h-screen bg-cyan-50 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl">

        <h1 className="text-4xl font-bold text-cyan-700 text-center mb-3">
          Add New Service
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Create and save service details
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Service Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Service Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter service name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Service Type
            </label>

            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Enter service type"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Contact Number
            </label>

            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Opening Time */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Opening Time
            </label>

            <input
              type="text"
              name="opening"
              value={formData.opening}
              onChange={handleChange}
              placeholder="9:00 AM"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Closing Time */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Closing Time
            </label>

            <input
              type="text"
              name="closing"
              value={formData.closing}
              onChange={handleChange}
              placeholder="6:00 PM"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Rating
            </label>

            <input
              type="text"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="4.5"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-gray-700">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter service description"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="md:col-span-2 bg-cyan-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-cyan-600 transition"
          >
            Save Service
          </button>
        </form>
      </div>
    </div>
  );
}

export default ServiceForm;