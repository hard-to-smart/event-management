import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/actions/authAction";

const Register = ({onRegisterSuccess, onClose, setIsRegister}) => {
  const dispatch = useDispatch()
  const handleRegisterSubmit= (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const registerValues = {}
    for (const [name, value] of formData.entries()) {
      registerValues[name] = value;
    }
    console.log(registerValues, "register values")
    dispatch(registerUser(registerValues))
    onRegisterSuccess()
  }

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
            </div>
            <div className="py-2 text-left">
              <input
                type="email"
                name="email"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-noneblock w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Email"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="phone"
                name="phone"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-noneblock w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Phone Number"
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
                Sign Up
              </button>
            </div>
          </form>
          {/* <div className="text-center">
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </div> */}
          <div className="text-center mt-12">
            <span>Already have an account?</span>
            <button onClick={()=> setIsRegister((prev)=> !prev)}
              
              className="font-light text-md text-indigo-600 underline  hover:text-indigo-800"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
  );
};

export default Register;
