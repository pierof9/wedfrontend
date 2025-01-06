import React from "react";
import { NavLink } from "react-router-dom";

const TopBar = () => {
    return (
        <nav className="simonetta-black text-2xl md:text-2xl font-bold newBrown mb-4 leading-tight pt-6">
          <div className="max-w-7xl mx-auto px-4 flex justify-center md:justify-end">
            {/* Navigation Links */}
            <div className="space-x-6 flex items-center">
              <NavLink
                to="/rsvp"
                className={({ isActive }) =>
                  isActive
                    ? "newBrown font-bold"
                    : "newRose hover:newBrown transition duration-200"
                }
              >
                RSVP
              </NavLink>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive
                    ? "newBrown font-bold"
                    : "newRose hover:newBrown transition duration-200"
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