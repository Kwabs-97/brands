/** @format */

import React from "react";
import styles from "../styles/Home.module.css";
import Button from "../features/Button";

//---- image data -------------//
import frame1 from "../assets/045a36973b1b54d446d9764f07731d37.png";
import frame2 from "../assets/2c8931fb85d6d7ed6f8849b21ea4687b.png";
import eclipse1 from "../assets/33fe647a46f9bf668322f8c1d94ed937.png";
import eclipse2 from "../assets/7d62b2c9ff8b51ac3a648cf214d14866.png";
import eclipse3 from "../assets/056cc892636460bee5791aa3f243854c.png";
import eclipse4 from "../assets/d8003e7c5abaae02be0c524fe88ec378.png";
import eclipse5 from "../assets/8a0e7a6ab75fc2eabd9a0a9ae72f8ea0.png";
//---- end of image data -----//

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.section1}>
          <header>
            <section className={styles.topHeading}>
              <span>TRANSFORMING BRANDS</span>
            </section>
            <div className={styles.about}>
              <section className={styles.mainHeading}>
                <h2>Drive Engagement, and Unleash Success with us.</h2>
              </section>
              <section className={styles.more}>
                <p>
                  With a passion for innovation and a commitment to results, we craft tailored
                  solutions that transform your brand's digital presence.
                </p>
              </section>
            </div>
          </header>
          <aside>
            <Button>Contact Us</Button>
          </aside>
        </div>
        <div className={styles.section2}>
          <img src={frame1} alt="" className={styles.frame} />

          <section className={styles.impressionsContainer}>
            <aside className={styles.impressionsLayout}>
              <div className={styles.impressions}>
                <section>
                  <h3>200+</h3> <p>Happy Clients</p>
                </section>
                <section>
                  <h3>10+</h3> <p>Happy Clients</p>
                </section>
              </div>
              <div className={styles.impressions}>
                <section>
                  <h3>20+</h3> <p>Businesses</p>
                </section>
                <section>
                  <h3>20+</h3> <p>Projects</p>
                </section>
              </div>
            </aside>
            <aside className={styles.eclipseLayout}>
              <img src={eclipse1} alt="" className={styles.eclipse} />
              <img src={eclipse2} alt="" className={styles.eclipse} />
              <img src={eclipse3} alt="" className={styles.eclipse} />
              <img src={eclipse4} alt="" className={styles.eclipse} />
              <img src={eclipse5} alt="" className={styles.eclipse} />
            </aside>
          </section>

          <img src={frame2} alt="" className={styles.frame} />
        </div>
      </div>
    </div>
  );
};

export default Home;
