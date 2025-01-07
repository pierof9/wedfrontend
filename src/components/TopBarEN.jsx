import React from "react";
import { NavLink } from "react-router-dom";

const TopBar = () => {
    return (
        <nav className="simonetta-black text-2xl md:text-2xl font-bold newBrown mb-4 leading-tight pt-6">
          <div className="max-w-7xl mx-auto px-4 flex justify-center items-center md:justify-end">
            {/* Language Selector */}
            <div className="flex">
            <NavLink to="/it">
                <img
                src="https://flagcdn.com/w40/it.png"
                alt="Italian Flag"
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition duration-200"
                />
            </NavLink>
            <NavLink to="/en">
                <img
                src="https://flagcdn.com/w40/gb.png"
                alt="UK Flag"
                className="mx-2 w-6 h-6 cursor-pointer hover:opacity-80 transition duration-200"
                />
            </NavLink>
            </div>

            {/* Navigation Links */}
            <div className="space-x-6 flex items-center">
              <NavLink
                to="/en/rsvp"
                className={({ isActive }) =>
                  isActive
                    ? "mylink newBrown font-bold"
                    : "mylink newRose transition duration-200"
                }
              >
                RSVP
              </NavLink>
              <NavLink
                to="/en/contacts"
                className={({ isActive }) =>
                  isActive
                    ? "mylink newBrown font-bold"
                    : "mylink newRose transition duration-200"
                }
              >
                Contacts
              </NavLink>
            </div>
          </div>
        </nav>
      );
};

export default TopBar;