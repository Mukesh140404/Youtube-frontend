import { useState } from "react";
import { Home, User, Settings } from "lucide-react"; // icons
import useLayout from "../context/SidebarContext.js";

export default function SideBar({isOpen}) {
  
    const {SideBarIsOpen} = useLayout()

  const menu = [
    { name: "Home", icon: <Home size={22} /> },
    { name: "Profile", icon: <User size={22} /> },
    { name: "Settings", icon: <Settings size={22} /> },
  ];

  return (
    <>
    <div
      className={`
        hidden
        h-full bg-gray-800 text-white 
        md:flex flex-col py-4 transition-all duration-300
        ${SideBarIsOpen ? "w-50" : "w-16"}
      `}
    >
      {/* Toggle Button */}
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 mb-4 ml-2 bg-gray-700 rounded-lg"
      >
        {isOpen ? "<" : ">"}
      </button> */}

      {/* Menu Items */}
      <ul className="flex flex-col gap-2">
        {menu.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-2 mx-2 rounded-lg hover:bg-gray-700 cursor-pointer"
          >
            {/* Icon */}
            <div>{item.icon}</div>

            {/* Text (hide when collapsed) */}
            {SideBarIsOpen && (
              <span className="text-sm font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
    <div
      className={`
        flex
        h-full bg-gray-800 text-white 
        md:hidden flex-col py-4 transition-all duration-300
        ${SideBarIsOpen ? "w-64" : "w-0"}
      `}
    >
      {/* Toggle Button */}
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 mb-4 ml-2 bg-gray-700 rounded-lg"
      >
        {isOpen ? "<" : ">"}
      </button> */}

      {/* Menu Items */}
      <ul className="flex flex-col gap-2">
        {menu.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 p-2 mx-2 rounded-lg hover:bg-gray-700 cursor-pointer"
          >
            {/* Icon */}
            <div>{item.icon}</div>

            {/* Text (hide when collapsed) */}
            {SideBarIsOpen && (
              <span className="text-sm font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
