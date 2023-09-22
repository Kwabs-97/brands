/** @format */

import React from "react";
import styles from "../styles/Services.module.css";

function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <header>
          <div>
            <span>Our Services</span>
            <h2>Unleash Our Services for Social Success</h2>
          </div>
          <div>
            <span>
              We elevate your brand with exceptional services. Our comprehensive offerings maximise
              your online presence, engage your audience, and drive impactful results.
            </span>
          </div>
        </header>

        <main>
          <div className={styles.serviceContainer}>
            <header>
              <h3>Social Media Strategy</h3>
            </header>
            <article>
              <p>
                Our experts create bespoke strategies that align with your brand's identity and
                objectives. We navigate the ever-evolving social landscape to deliver a roadmap
                tailored for your success.
              </p>
            </article>
          </div>
          <div className={styles.serviceContainer}>
            <header>
              <h3>Content Creation</h3>
            </header>
            <article>
              <p>
                Captivate your audience with visually compelling and engaging content. Our creative
                team transforms your ideas into posts that resonate, ensuring your brand remains in
                the spotlight.
              </p>
            </article>
          </div>
          <div className={styles.serviceContainer}>
            <header>
              <h3>Engagement Analytics</h3>
            </header>{" "}
            <article>
              <p>
                Harness the power of data to refine your strategy. Dive into in-depth engagement
                analytics to understand what resonates, enabling you to make informed decisions and
                drive continuous growth.
              </p>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Services;
