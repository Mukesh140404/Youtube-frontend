import React, { useState } from "react";

export default function SearchBar() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleSearchIcon = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className="
          flex items-center gap-2 w-full h-[42px]
          bg-white dark:bg-gray-100
          rounded-xl border shadow-sm
          transition-shadow duration-300 ease-in-out
          hover:shadow-md focus-within:shadow-md
        "
      >
        <i
          className={`
            fa-solid fa-magnifying-glass ml-3 text-[1px]
            transition-opacity duration-300
            ${isClicked ? "opacity-100 text-[15px]" : "opacity-0"}
          `}
        ></i>

        <input
          type="search"
          placeholder="Search..."
          onFocus={toggleSearchIcon}
          onBlur={toggleSearchIcon}
          className="
            w-24
            flex-1 bg-transparent outline-none
            transition-all duration-400 ease-out
            focus:pl-1
          "
        />

        <button
          type="submit"
          className="
            p-2 bg-gray-700 text-gray-200 rounded-r-lg rounded-l-none transition-all
            hover:bg-gray-800 hover:text-white
          "
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}
