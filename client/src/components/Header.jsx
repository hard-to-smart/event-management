import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./modal";
import Login from "./Login";
import Register from "./Register";
import {
  selectIsAuthenticated,
  selectLoginUser,
} from "../redux/slices/authSlice";
import { logoutUser } from "../redux/actions/authAction";

const Header = () => {
  const userData = useSelector(selectLoginUser);
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const [isRegister, setIsRegister] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsRegister(false);
    setIsDropdownOpen(false)
  };

  const handleUserLogout = () => {
    dispatch(logoutUser());
    navigate("/");
    setIsDropdownOpen(false)
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav className="bg-[#DDD0C8] border-b-2 border-[#C5B2A3] px-4 lg:px-6 py-3 shadow-xl">
        <div className="flex font-serif flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex flex-row gap-2 items-center">
            <img src={logo} className="h-6 sm:h-10" alt="Logo" />
            <span className="self-center text-2xl text-[#7A5E48] font-semibold whitespace-nowrap">
              EVE
            </span>
          </NavLink>
          <div className="flex items-center lg:order-2">
            {!isAuthenticated && (
              <button
                onClick={handleOpenModal}
                className={`bg-[#C5B2A3] focus:ring-4 focus:ring-red-100 text-[#7A5E48] font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
              >
                Log in
              </button>
            )}
            <Modal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              element={
                isRegister ? (
                  <Register
                    onRegisterSuccess={() => setIsRegister(false)}
                    setIsRegister={setIsRegister}
                    onClose={handleCloseModal}
                  />
                ) : (
                  <Login
                    onRegisterClick={() => setIsRegister(true)}
                    onClose={handleCloseModal}
                  />
                )
              }
            />
            {isAuthenticated && userData && (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className={`bg-[#C5B2A3] focus:ring-4 focus:ring-red-100 text-[#7A5E48] font-semibold rounded-full text-sm px-2.5 py-2.5 text-center me-2 mb-2`}
                >
                  {userData.name.slice(0, 2).toUpperCase()}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mx-0 text-nowrap z-10 bg-white shadow-lg rounded-md mt-2">
                    <NavLink
                      to={`${userData.role === 'admin'? '/admin/profile' : 'profile'}`} 
                      className="block px-8 py-2  text-gray-800 hover:bg-gray-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </NavLink>
                    {userData && userData.role === "user" && (
                      <NavLink
                        to="/mybookings"
                        className="block px-8 py-2  text-gray-800 hover:bg-gray-200"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Bookings
                      </NavLink>
                    )}
                    <button
                      onClick={handleUserLogout}
                      className="block text-left px-8 py-2 w-full text-red-600 hover:bg-red-100"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            {!userData?.role || userData.role !== "admin" ? (
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 text-[20px] hover:border-b-2 hover:text-[#946f54] hover:border-b-[#946f54] lg:bg-transparent font-semibold lg:p-0 ${
                        isActive ? "text-[#946f54]" : "text-[#b0aead]"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/category"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 text-[20px] hover:border-b-2 hover:text-[#946f54] hover:border-b-[#946f54] lg:bg-transparent font-semibold lg:p-0 ${
                        isActive ? "text-[#946f54]" : "text-[#b0aead]"
                      }`
                    }
                  >
                    Category
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 text-[20px] hover:border-b-2 hover:text-[#946f54] hover:border-b-[#946f54] lg:bg-transparent font-semibold lg:p-0 ${
                        isActive ? "text-[#946f54]" : "text-[#b0aead]"
                      }`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
