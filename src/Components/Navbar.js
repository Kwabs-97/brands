/** @format */

import Button from "../features/Button";
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
      link: "Features",
    },
    {
      id: 4,
      link: "Pricing",
    },
    {
      id: 5,
      link: "Blog",
    },
  ];

  return (
    <nav>
      <div className={styles.container}>
        <div>
          {" "}
          <span>LOGO</span>
        </div>
        <div className={styles.links}>
          <ul className={styles.linksContainer}>
            {navlinks.map((link, index) => (
              <a key={link.id}>{link.link}</a>
            ))}
          </ul>
        </div>
        <div>
          <Button>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
