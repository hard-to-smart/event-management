import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/authAction";
import { selectLoginUser } from "../redux/slices/authSlice";

const Login = () => {
  // const [loginData, setLoginData] = useState({})
  const userData = useSelector(selectLoginUser);
  const dispatch = useDispatch();
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginValues = {};
    for (const [name, value] of formData.entries()) {
      loginValues[name] = value;
    }
    console.log('Login values:', loginValues);
    dispatch(loginUser(loginValues));
  };
  console.log(userData)
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form className="text-center" onSubmit={handleFormSubmit}>
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
            </div>
            <div className="py-2 text-left">
              <input
                type="password"
                name="password"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Password"
              />
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
              >
                Sign In
              </button>
            </div>
          </form>
          {/* <div className="text-center">
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </div> */}
          <div className="text-center mt-12">
            <span>Don't have an account?</span>
            <Link
              to="/register"
              className="font-light text-md text-indigo-600 underline hover:text-indigo-800"
            >
              Create One
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
