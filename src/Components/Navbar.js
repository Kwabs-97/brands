/** @format */

import styles from "../styles/Navbar.module.css";
import React from "react";

function Navbar() {
  const navlinks = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "Pricing",
    },
    {
      id: 4,
      link: "Features",
    },
    {
      id: 5,
      link: "Blog",
    },
  ];

  return (
    <nav>
      <div>
        {" "}
        <span>LOGO</span>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
}

export default Navbar;
