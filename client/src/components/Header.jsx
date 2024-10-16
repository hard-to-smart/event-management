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
      <nav className="bg-[#DDD0C8] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-[#DDD0C8]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex flex-row gap-2 items-center">
            <img src={logo} className=" h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              EVE
            </span>
          </NavLink>
          <div className="flex items-center lg:order-2">
            { !userData && !isAuthenticated &&
            <button
              onClick={handleOpenModal}
              className={`hover:bg-gray-50  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none`}
            >
              Log in
            </button>
            }
            <Modal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              element={isRegister ? <Register onRegisterSuccess={() => setIsRegister(false)} onClose={handleCloseModal}/> : <Login onRegisterClick={() => setIsRegister(true)} onClose={handleCloseModal} />} 
              // element={<Login isOpen={isModalOpen} onClose={handleCloseModal} />}
            />
            {
              userData && isAuthenticated && 
              <button
              onClick={handleUserLogout}
              className={`hover:bg-gray-50  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none`}
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
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent font-semibold lg:p-0 ${
                      isActive
                        ? "text-white dark:text:white font-bold"
                        : " text-gray-400 dark:text:gray-400"
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
                    `block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent font-semibold lg:p-0 ${
                      isActive
                        ? "text-white dark:text:white font-bold"
                        : " text-gray-400 dark:text:gray-400"
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
                    `block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent font-semibold lg:p-0 ${
                      isActive
                        ? "text-white dark:text:white font-bold"
                        : " text-gray-400 dark:text:gray-400"
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
