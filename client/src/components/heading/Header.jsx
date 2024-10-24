import { NavLink, useNavigate } from "react-router-dom";
import  logo  from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../modal";
import Login from "../Login";
import Register from "../Register";
import {
  selectIsAuthenticated,
  selectLoginUser,
} from "../../redux/slices/authSlice";
import { logoutUser } from "../../redux/actions/authAction";
import { GiHamburgerMenu } from "react-icons/gi";
import {RxCross2} from "react-icons/rx"
import MobileMenu from "./MobileMenu";
import DropdownMenu from "./DropdownMenu"
import NavigationLinks from './NavigationLinks'
const Header = () => {
  const userData = useSelector(selectLoginUser);
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const [isRegister, setIsRegister] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsRegister(false);
    setIsDropdownOpen(false);
  };

  const handleUserLogout = () => {
    dispatch(logoutUser());
    navigate("/");
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header>
      <nav className="bg-[#DDD0C8] border-b-2 border-[#C5B2A3] px-4 lg:px-6 py-3 shadow-xl">
        <div className="flex font-serif flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <NavLink to="/" className="flex  flex-row gap-2 items-center">
          <img src={logo} className="h-[85px] -my-4" alt="Logo" />

            <span className="self-center  text-2xl text-[#7A5E48] font-semibold whitespace-nowrap">
              EVE
            </span>

          </NavLink>

          {/* Mobile Menu Toggle Button */}
          <button className="lg:hidden text-[#7A5E48]" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <RxCross2/> : <GiHamburgerMenu />}
          </button>

          <div className="flex items-center lg:order-2">
            {!isAuthenticated && (
              <button onClick={handleOpenModal} className="bg-[#C5B2A3] focus:ring-4 focus:ring-red-100 text-[#7A5E48] font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log in</button>
            )}
            <Modal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              element={isRegister ? (
                <Register onRegisterSuccess={() => setIsRegister(false)} setIsRegister={setIsRegister} onClose={handleCloseModal} />
              ) : (
                <Login onRegisterClick={() => setIsRegister(true)} onClose={handleCloseModal} />
              )}
            />
            {isAuthenticated && userData && (
              <DropdownMenu userData={userData} isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} handleUserLogout={handleUserLogout} />
            )}
          </div>

          {/* Mobile Menu */}
          <MobileMenu isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} userRole={userData?.role} />

          <NavigationLinks userRole={userData?.role} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
