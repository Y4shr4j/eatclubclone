import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SummaryApi from '../common';

const MyAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    streetAddress: "",
    zipCode: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    // Fetch the user data from the server and set it in the state
    async function fetchUserData() {
      try {
        const response = await fetch(SummaryApi.getUser.url, {
          method: SummaryApi.getUser.method,
          headers: {
            "Content-Type": "application/json",
            // Add authorization token if needed
          },
        });

        const result = await response.json();
        if (result.success) {
          setData({
            name: result.data.name,
            phoneNumber: result.data.phoneNumber,
            streetAddress: result.data.streetAddress,
            zipCode: result.data.zipCode,
            password: "",
            confirmPassword: "",
          });
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("Failed to fetch user data.");
      }
    }

    fetchUserData();
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password && data.password !== data.confirmPassword) {
      toast.error("Please check password and confirm password.");
      return;
    }

    try {
      const response = await fetch(SummaryApi.updateUser.url, {
        method: SummaryApi.updateUser.method,
        headers: {
          "Content-Type": "application/json",
          // Add authorization token if needed
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        toast.success("User information updated successfully.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to update user information.");
    }
  };

  return (
    <section id="my-account">
      <div className="container mx-auto p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Phone Number:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Street Address:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Enter street address"
                  name="streetAddress"
                  value={data.streetAddress}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>ZIP Code:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Enter ZIP code"
                  name="zipCode"
                  value={data.zipCode}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label>Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div className="cursor-pointer text-xl" onClick={() => setShowPassword(prev => !prev)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <div>
              <label>Confirm Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={data.confirmPassword}
                  name="confirmPassword"
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div className="cursor-pointer text-xl" onClick={() => setShowConfirmPassword(prev => !prev)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">Update</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
