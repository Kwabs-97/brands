/** @format */

import React from "react";
import styles from "../styles/Footer.module.css";
import { FaInstagram, FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className={styles.footerLinks}>
        <div className={styles.logo}>
          <h1>LOGO</h1>
          <span>
            With a passion for innovation and a commitment to results, we craft tailored solutions
            that transform your brand's digital presence.
          </span>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.container}>
            <header>Company</header>
            <div classname={styles.links}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="#">Services</a>
                </li>

                <li>
                  <a href="#">Pricing</a>
                </li>

                <li>
                  <a href="#">Features</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.container}>
            <header>Legal</header>
            <div classname={styles.links}>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.container}>
            <header>Others</header>
            <div classname={styles.links}>
              <ul>
                <li>
                  <a href="#">Blogs</a>
                </li>

                <li>
                  <a href="#">FAQS</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socials}>
        <div className={styles.iconContainer}>
          <FaInstagram className={styles.icon} style={{ color: "white" }} />
        </div>
        <div className={styles.iconContainer}>
          <FaFacebook className={styles.icon} style={{ color: "white" }} />
        </div>
        <div className={styles.iconContainer}>
          <FaLinkedinIn className={styles.icon} style={{ color: "white" }} />
        </div>
        <div className={styles.iconContainer}>
          <FaTwitter className={styles.icon} style={{ color: "white" }} />
        </div>
        <div className={styles.iconContainer}>
          <FaYoutube className={styles.icon} style={{ color: "white" }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
