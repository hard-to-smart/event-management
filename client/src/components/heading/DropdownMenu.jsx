import { NavLink } from "react-router-dom";

export const DropdownMenu = ({
  userData,
  isDropdownOpen,
  toggleDropdown,
  handleUserLogout,
}) => {
  return (
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
            to={`${userData.role === "admin" ? "/admin/profile" : "/profile"}`}
            onClick={toggleDropdown}
            className="block px-8 py-2 text-gray-800 hover:bg-gray-200"
          >
            Profile
          </NavLink>
          {userData.role === "user" && (
            <NavLink
              to="/mybookings"
              onClick={toggleDropdown}
              className="block px-8 py-2 text-gray-800 hover:bg-gray-200"
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
  );
};

export default DropdownMenu;