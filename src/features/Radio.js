/** @format */

import React from "react";
import styles from "../styles/Radio.module.css";

function Radio(props) {
  return (
    <div>
      <label htmlFor="myRadio" className={styles.radio}>
        <input type="radio" id="myRadio" className={styles.radio__input} defaultChecked />
        <div className={styles.customRadio}></div>
       {props.children}
      </label>
    </div>
  );
}

export default Radio;
