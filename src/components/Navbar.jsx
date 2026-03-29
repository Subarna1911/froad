import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-500 font-semibold" : "";

  return (
    <div className="flex justify-center items-center text-xl  font-heading font-md gap-8">
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
       <NavLink to="/task" className={linkClass}>
        Task
      </NavLink>

      <NavLink to="/blog" className={linkClass}>
        Blog
      </NavLink>
    </div>
  );
};

export default Navbar;