import { RiLogoutBoxLine } from "react-icons/ri";
import { TbCategory2, TbCategoryPlus } from "react-icons/tb";
import { HiMiniUsers } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="z-10 ml-0 w-64 min-h-[80vh] pt-20 transition-transform -translate-x-full bg-[#DDD0C8] border-r border-gray-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-[#DDD0C8]">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink
              to="admin"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#C5B2A3] transition-all duration-200"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="admin/bookings"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#C5B2A3] transition-all duration-200"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="ml-3">Bookings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="admin/users"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#C5B2A3] transition-all duration-200"
            >
              <HiMiniUsers className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="ml-3">Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="admin/category"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#C5B2A3] transition-all duration-200"
            >
              <TbCategory2 className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="ml-3">Categories</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideNavbar;
