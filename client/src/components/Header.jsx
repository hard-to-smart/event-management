import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  selectIsAuthenticated,
  selectLoginUser,
} from "../redux/slices/authSlice";
import { loginUser, logoutUser } from "../redux/actions/authAction";
import { useState } from "react";
import Modal from "./modal";
import Login from "./Login";
import Register from './Register';

const Header = () => {
  const userData = useSelector(selectLoginUser);
  const navigate = useNavigate()
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const [isRegister, setIsRegister] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsRegister(false)
  }

  const handleUserLogout=()=>{
    if(userData.role=== 'admin'){
      dispatch(logoutUser())
      navigate('/')
    }
    else dispatch(logoutUser)
  }
  return (
    <header>
      <nav className="bg-[#DDD0C8] border-b-2 border-[#C5B2A3] px-4 lg:px-6 py-3 shadow-xl">
        <div className="flex font-serif flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex flex-row gap-2 items-center">
            <img src={logo} className=" h-6 sm:h-10" alt=" Logo" />
            <span className="self-center text-2xl text-[#7A5E48]  font-semibold whitespace-nowrap">
              EVE
            </span>
          </NavLink>
          <div className="flex items-center lg:order-2">
            { !userData && !isAuthenticated &&
            <button
              onClick={handleOpenModal}
              className={` bg-[#C5B2A3] focus:ring-4 focus:ring-red-100 text-[#7A5E48]  font-semibold rounded-lg text-sm  px-5 py-2.5 text-center me-2 mb-2`}
            >
              Log in
            </button>
            }
            <Modal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              element={isRegister ? <Register onRegisterSuccess={() => setIsRegister(false)} setIsRegister={setIsRegister} onClose={handleCloseModal}/> : <Login onRegisterClick={() => setIsRegister(true)} onClose={handleCloseModal} />} 
              // element={<Login isOpen={isModalOpen} onClose={handleCloseModal} />}
            />
            {
              userData && isAuthenticated && 
              <button
              onClick={handleUserLogout}
              className={`bg-[#C5B2A3] focus:ring-4 focus:ring-red-100 text-[#7A5E48]  font-semibold rounded-lg text-sm  px-5 py-2.5 text-center me-2 mb-2`}
            >
              Log out
            </button>
            }
            {/* <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <GiHamburgerMenu />
            </button> */}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8  lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 text-[20px] hover:border-b-2 hover:text-[#946f54] hover:border-b-[#946f54] lg:bg-transparent font-semibold lg:p-0 ${
                      isActive ? "text-[#946f54]" : "text-[#b0aead]"
                    } `
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
                  } `
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
                  } `
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
