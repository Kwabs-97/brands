/** @format */

import React from "react";
import styles from "../styles/Contact.module.css";
import Button from "../features/Button";
import contactUsImg from "../assets/contactUs.png";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span>CONTACT US</span>
            <h2>Let's Shape Your Social Media Success Together</h2>
          </div>
          <Button>Contact Us</Button>
        </div>
        <div className={styles.contactUsImg}></div>
      </div>
    </div>
  );
}

export default Contact;
