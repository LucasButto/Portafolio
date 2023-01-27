import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const refreshPage = () => {
    setTimeout(() => {
      if (window.screen.width <= 768) {
        window.location.reload();
      }
    }, 100);
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/" onClick={refreshPage}> Home </Link>
        <Link to="/projects" onClick={refreshPage}> Projects </Link>
        <Link to="/experience"> Experience </Link>
        <Link to="/contact" onClick={refreshPage}> Contact </Link>
      </div>
    </div>
  );
};

export default Navbar;
