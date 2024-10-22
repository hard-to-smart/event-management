import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/authAction";

const Register = ({ onRegisterSuccess, onClose, setIsRegister }) => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleFormValidate = (name, email, phone, password) => {
    let valid = true;
    const newErrors = { name: "", email: "", phone: "", password: "" };

    // Name Validation
    if (!name) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    // Email Validation
    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
      valid = false;
    }

    // Phone Number Validation
    if (!phone) {
      newErrors.phone = "Phone number is required.";
      valid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
      valid = false;
    }

    // Password Validation
    if (!password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // sending user payload to action
  const dispatch = useDispatch();
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const registerValues = {};
    for (const [name, value] of formData.entries()) {
      registerValues[name] = value;
    }
    if (
      handleFormValidate(
        registerValues.name,
        registerValues.email,
        registerValues.phone,
        registerValues.password
      )
    ) {
      dispatch(registerUser(registerValues));
      onRegisterSuccess();
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
        <form className="text-center" onSubmit={handleRegisterSubmit}>
          <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
            Sign Up
          </h1>
          <div className="py-2 text-left">
            <input
              type="name"
              name="name"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Name"
            />
             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="py-2 text-left">
            <input
              type="email"
              name="email"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-noneblock w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="py-2 text-left">
            <input
              type="phone"
              name="phone"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-noneblock w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Phone Number"
            />
             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div className="py-2 text-left">
            <input
              type="password"
              name="password"
              className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="py-2">
            <button
              type="submit"
              className="bg-[#A67A59] text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:outline-none hover:bg-[#8c6043] transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        {/* register if already signed in */}
        <div className="text-center mt-12">
          <span>Already have an account?</span>
          <button
            onClick={() => setIsRegister((prev) => !prev)}
            className="font-light text-md text-yellow-700 underline hover:text-amber-950"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
