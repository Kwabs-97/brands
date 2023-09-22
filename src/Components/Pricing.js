/** @format */

import React from "react";
import styles from "../styles/Pricing.module.css";
import Button from "../features/Button";

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
          <div>
            <div>
              <p>Best Plan</p>
            </div>
            <div>
              <h2>$99</h2>
            </div>
            <div className={styles.pricingRadios}>
              <div>
                <label htmlFor="myRadio" className={styles.radio}>
                  <input type="radio" id="myRadio" className={styles.radio__input} defaultChecked/>
                  <div className={styles.customRadio}></div>
                  Social Media Strategy Development
                </label>
              </div>
              <div>
                <label htmlFor="myRadio" className={styles.radio}>
                  <input type="radio" id="myRadio" className={styles.radio__input} defaultChecked/>
                  <div className={styles.customRadio}></div>
                  Social Media Strategy Development
                </label>
              </div>
              <div>
                <label htmlFor="myRadio" className={styles.radio}>
                  <input type="radio" id="myRadio" className={styles.radio__input} defaultChecked/>
                  <div className={styles.customRadio}></div>
                  Social Media Strategy Development
                </label>
              </div>
              <div>
                <label htmlFor="myRadio" className={styles.radio}>
                  <input type="radio" id="myRadio" className={styles.radio__input} defaultChecked/>
                  <div className={styles.customRadio}></div>
                  Social Media Strategy Development
                </label>
              </div>
             
            </div>
          </div>
          <div></div>
          <div></div>
        </main>
      </div>
    </div>
  );
}

export default Pricing;
