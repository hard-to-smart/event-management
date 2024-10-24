import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/authAction";
import { selectIsAuthenticated } from "../redux/slices/authSlice";

const Login = ({onRegisterClick, onClose}) => {
  const userData = useSelector((store)=>store.auth.user);
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleFormValidate = (email, password) => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email Validation
    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginValues = {};
    for (const [name, value] of formData.entries()) {
      loginValues[name] = value;
    }
    if (handleFormValidate(loginValues.email, loginValues.password)) {
    dispatch(loginUser(loginValues));
    }
  };

  // redirect to admin route if user.role is admin else redirect to user route
  useEffect(() => {
    if (isAuthenticated && userData.role === 'admin') {
      navigate("/admin");
      onClose()
    }
    else if(isAuthenticated){
      navigate('/')
      onClose()
    }
  }, [userData, navigate]);


  return (  
    // user login
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form className="text-center" onSubmit={handleLoginSubmit}>
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Sign in
            </h1>
            <div className="py-2 text-left">
              <input
                type="email"
                name="email"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Email"
              />
               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                Sign In
              </button>
            </div>
          </form>

          <div className="text-center mt-12">
            <span>Don't have an account? </span>
            <button onClick={onRegisterClick}
              className="font-light text-md text-yellow-700 underline hover:text-amber-950"
            >
              Create One
            </button>
          </div>
        </div>
      </div>
  );
};

export default Login;
