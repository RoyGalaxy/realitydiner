import PaymentButton from "@/components/PaymentButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    city: "",
    state: "",
  });

  const getLocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();

          setAddress({
            addressLine1: data.address.road || "",
            addressLine2: data.address.suburb || "",
            postalCode: data.address.postcode || "",
            city: data.address.city || data.address.town || data.address.village || "",
            state: data.address.state || "",
          });
          console.log(address)
        } catch (error) {
          console.error("Error fetching address:", error);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Failed to get location. Please enable location services.");
      }
    );
  };

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-md mx-auto p-6 py-10 bg-white rounded-lg shadow-md">
        {/* Auto Detect Location */}
        <h2 className="text-center font-semibold">Turn On Location</h2>
        <button onClick={getLocation} className="w-full bg-red-400 text-white py-2 px-4 rounded-md mt-3 flex items-center justify-center">
          Auto Detect <span className="ml-2">📍</span>
        </button>
        {/* Separator */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        {/* Manual Location Entry */}
        <h3 className="text-center font-semibold mb-6">Enter Location Manually</h3>

        <form className="space-y-3">
          <div>
            <label className="text-sm font-medium">ADDRESS LINE 1</label>
            <input
              type="text"
              name="addressLine1"
              value={address.addressLine1}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full border p-2 rounded-md my-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium">ADDRESS LINE 2</label>
            <input
              type="text"
              name="addressLine2"
              value={address.addressLine2}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full border p-2 rounded-md my-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium">POSTAL CODE</label>
            <input
              type="text"
              name="postalCode"
              value={address.postalCode}
              onChange={handleChange}
              placeholder="Enter postal code"
              className="w-full border p-2 rounded-md my-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium">CITY</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="w-full border p-2 rounded-md my-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium">STATE</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              placeholder="Enter state"
              className="w-full border p-2 rounded-md my-2"
            />
          </div>

          {/* Next Button */}
          <PaymentButton />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
