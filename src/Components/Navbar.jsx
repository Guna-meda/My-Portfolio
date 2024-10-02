import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 right-0 flex justify-center pr-10 pt-5 z-50">
      <div className="container mx-auto flex justify-end items-center font-sans font-semibold">
        <div className="relative ">
          <ul
            className={`absolute right-0 top-full mt-2 w-48 bg-black text-white space-y-2 ${
              isOpen ? "block" : "hidden"
            } md:flex md:relative md:top-auto md:mt-0 md:w-auto md:bg-transparent md:space-y-0 md:space-x-4 transition-all duration-300`}
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2  hover:bg-two hover:text-one hover:rounded-md focus:bg-custom-green focus:text-custom-dark focus:rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2  hover:bg-two hover:text-one hover:rounded-md focus:bg-custom-green focus:text-custom-dark focus:rounded-md"
              >
                My Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2   hover:bg-two hover:text-one hover:rounded-md focus:bg-custom-green focus:text-custom-dark focus:rounded-md"
              >
                My Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2   hover:bg-two hover:text-one hover:rounded-md focus:bg-custom-green focus:text-custom-dark focus:rounded-md"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="text-white md:hidden pt-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <TiThMenu size={34} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
