/** @format */

import React from "react";
import styles from "../styles/Blog.module.css";


function Blog() {
  const currentDate = new Date();
  console.log(currentDate);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(currentDate);

  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.imgContainer}></div>
        <div className={styles.blogDetails}>
          <header>
            <span>OUR BLOG</span>
            <h2>Stay Informed with Out Latest Blog Posts</h2>
          </header>
          <main>
            <div className={styles.sideContainer}>
              <div className={`${styles.sideImg} ${styles.sideImg1}`}></div>
              <div>
                <p>"Visual Storytelling: Crafting Compelling Brand Stories Through Imagery"</p>
                <span>{formattedDate}</span>
              </div>
            </div>
            <div className={styles.sideContainer}>
              <div className={`${styles.sideImg} ${styles.sideImg2}`}></div>
              <div>
                <p>“Capitalising on Instant Gratification in Social Media Marketing"</p>
                <span>{formattedDate}</span>
              </div>
            </div>
            <div className={styles.sideContainer}>
              <div className={`${styles.sideImg} ${styles.sideImg3}`}></div>
              <div>
                <p>“How Narratives Drive Social Media Engagement”</p>
                <span>{formattedDate}</span>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Blog;
