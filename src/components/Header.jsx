import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoAlbumsOutline } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi"; // Import a login icon, e.g., from react-icons/fi
import vector from "../assets/Vector (8).png";

function Header() {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="bg-[rgba(250, 250, 250, 1)] p-[20px] relative w-[15%] border-[1px] flex flex-col justify-between h-screen"> {/* Added flex utilities and h-screen */}
      <div> {/* This div wraps all content except logout to push it to the top */}
        <h3 className="relative text-center mt-[0px] text-[30px] font-serif font-[900] underline tracking-[-5px] text-[rgba(35, 35, 33, 1)]">
          V-Track
        </h3>
        <ul className="mt-[50px] text-[black] flex flex-col transition-all">
          <div className="mb-[20px] ml-[10px] flex items-center w-[150px] h-[48px] text-center transition-all">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center bg-[#4A69E2] text-white p-2 rounded-[8px] w-full h-full font-[500] text-[14px]"
                  : "flex items-center hover:bg-[#4A69E2] hover:text-white hover:p-2 hover:rounded-[8px] transition-[0.3s] w-full h-full font-[500] text-[14px]"
              }
              to="/dashboard"
            >
              <MdOutlineDashboard className="mr-[10px]" />
              DASHBOARD
            </NavLink>
          </div>
          <div className="mb-[20px] ml-[10px] flex items-center w-[150px] h-[48px]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center bg-[#4A69E2] text-white p-2 rounded-[8px] w-full h-full font-[500] text-[14px] uppercase"
                  : "flex items-center hover:bg-[#4A69E2] hover:text-white hover:p-2 hover:rounded-[8px] transition-[0.3s] w-full h-full font-[500] text-[14px] uppercase"
              }
              to="/allViolations"
            >
              <IoAlbumsOutline className="mr-[10px]" />
              All Violations
            </NavLink>
          </div>
          <div className="mb-[20px] ml-[10px] flex items-center w-[150px] h-[48px]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center bg-[#4A69E2] text-white p-2 rounded-[8px] w-full h-full font-[500] text-[14px] uppercase"
                  : "flex items-center hover:bg-[#4A69E2] hover:text-white hover:p-2 hover:rounded-[8px] transition-[0.3s] w-full h-full font-[500] text-[14px] uppercase"
              }
              to="/List"
            >
              <FaFileAlt className="mr-[10px]" />
              Listt
            </NavLink>
          </div>
          <li className="relative top-[50px] mb-[40px]">
            <div
              className="flex items-center text-center cursor-pointer ml-[10px]"
              onClick={toggleCategories}
            >
              <div className="font-[700] text-[17px]">Categories</div>
              <img
                src={vector}
                alt="icon-toggle"
                className={`w-[13.5px] h-[6.75px] text-[rgba(35, 35, 33, 1)] ml-[30px] transition-transform ${
                  showCategories ? "rotate-180" : ""
                }`}
              />
            </div>
            {showCategories && (
              <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10">
                <NavLink
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#4A69E2]"
                  to="/categories/category1"
                  onClick={toggleCategories}
                >
                  Category 1
                </NavLink>
                <NavLink
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#4A69E2]"
                  to="/categories/category2"
                  onClick={toggleCategories}
                >
                  Category 2
                </NavLink>
                <NavLink
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#4A69E2]"
                  to="/categories/category3"
                  onClick={toggleCategories}
                >
                  Category 3
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Logout Link at the bottom */}
      <div className="mb-4 ml-[10px] flex items-center hover:bg-[#4A69E2] hover:text-white p-2 rounded-[8px] transition-[0.3s] w-[150px] h-[48px]">
        <FiLogIn className="mr-[10px]" /> {/* Login icon */}
        <NavLink className="font-[500] text-[14px] uppercase" to="/logout">
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Header;