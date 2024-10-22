import { NavLink } from "react-router-dom";

export const MobileMenu = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  userRole,
}) => {
  return (
    <div
      className={`lg:hidden ${
        isMobileMenuOpen ? "flex" : "hidden"
      } flex-col items-start w-full mt-4`}
    >
      {!userRole || userRole !== "admin" ? (
        <ul className="flex flex-col mt-4 font-medium space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 text-[20px] ${
                  isActive ? "text-[#946f54]" : "text-[#b0aead]"
                } lg:bg-transparent font-semibold lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 text-[20px] ${
                  isActive ? "text-[#946f54]" : "text-[#b0aead]"
                } lg:bg-transparent font-semibold lg:p-0`
              }
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 text-[20px] ${
                  isActive ? "text-[#946f54]" : "text-[#b0aead]"
                } lg:bg-transparent font-semibold lg:p-0`
              }
            >
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 text-[20px] ${
                  isActive ? "text-[#946f54]" : "text-[#b0aead]"
                } lg:bg-transparent font-semibold lg:p-0`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default MobileMenu;
