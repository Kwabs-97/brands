/** @format */

import React from "react";
import styles from "../styles/Pricing.module.css";
import Button from "../features/Button";
import Radio from "../features/Radio";

function Pricing() {
  return (
    <div className={styles.pricing}>
      <div className={styles.container}>
        <header>
          <div>
            <h2>Discover Our Plans</h2>
          </div>
          <div>
            <Button>Monthly</Button>
          </div>
        </header>
        <main>
          <div className={`${styles.card} ${styles.basic}`}>
            <div className={styles.priceHeader}>
              <p>Best Plan</p>
              <h2>$99</h2>
            </div>
            <div className={`${styles.pricingRadios} ${styles.pricingRadios1}`}>
              <Radio>Social Media Strategy Development</Radio>
              <Radio>Content Creation for up to 2 platforms</Radio>
              <Radio>Weekly Posting Schedule</Radio>
              <Radio>Basic Analytics and Engagement Tracking</Radio>
              <Radio>Email Support</Radio>
            </div>
            <button>Choose Plan</button>
          </div>
          <div className={`${styles.card} ${styles.standard}`}>
            <div className={styles.priceHeader}>
              <p>Standard Plan</p>
              <h2>$199</h2>
            </div>
            <div className={`${styles.pricingRadios} ${styles.pricingRadios2}`}>
              <Radio>Comprehensive Social Media Strategy</Radio>
              <Radio>Content Creation for up to 3 platforms</Radio>
              <Radio>Bi-Weekly Posting Schedule</Radio>
              <Radio>Advanced Analytics and Engagement Tracking</Radio>
              <Radio>Target Audience Analysis</Radio>
              <Radio>Email and Chat Support</Radio>
            </div>
            <button>Choose Plan</button>
          </div>
          <div className={`${styles.card} ${styles.premium}`}>
            <div className={styles.priceHeader}>
              <p>Premium Plan</p>
              <h2>$299</h2>
            </div>
            <div className={`${styles.pricingRadios} ${styles.pricingRadios3}`}>
              <Radio>Customized Social Media Strategy</Radio>
              <Radio>Content Creation for up to 4 platforms</Radio>
              <Radio>Weekly Posting Schedule</Radio>
              <Radio>In-depth Analytics and Engagement Tracking</Radio>
              <Radio>Target Audience Analysis and Optimisation</Radio>
              <Radio>Add Campaign Management</Radio>
              <Radio>Email, Chat and Phone Support</Radio>
            </div>
            <button>Choose Plan</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Pricing;
