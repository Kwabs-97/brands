/** @format */

import React from "react";
import styles from "../styles/Home.module.css";
import Button from "../features/Button";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.section1}>
        <header>
          <section>
            <span>TRANSFORMING BRANDS</span>
          </section>
          <section>
            <h2>DRIVE ENGAGEMENT, AND UNLEASH SUCCESS WITH US</h2>
          </section>
          <section>
            <p>
              With a passion for innovation and a commitment to results, we craft tailored solutions
              that transform your brand's digital presence.
            </p>
          </section>
        </header>
        <aside>
          <Button>Contact Us</Button>
        </aside>
      </div>
      <div className={styles.section2}>
        <section></section>
        <section>
          <aside></aside>
          <aside></aside>
        </section>
        <section></section>
      </div>
    </div>
  );
};

export default Home;
