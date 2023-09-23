/** @format */

import React from "react";
import styles from "../styles/Blog.module.css";
import blogImg from "../assets/552fa125150a7368a9e87eeaae2b6186.png";
import sideImg1 from "../assets/b2d98824fce6ce33d480d7d5cdca371c.png";
import sideImg2 from "../assets/fa1d3efd840e5f60b7f92cf079c46640.png";
import sideImg3 from "../assets/1a0925c449f59daeedb4302a5d777151.png";

function Blog() {
  const currentDate = new Date();
  console.log(currentDate);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(currentDate);

  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={blogImg} alt="" />
        </div>
        <div className={styles.blogDetails}>
          <header>
            <span>OUR BLOG</span>
            <h2>Stay Informed with Out Latest Blog Posts</h2>
          </header>
          <main>
            <div className={styles.sideContainer}>
              <img src={sideImg1} alt="" />
              <div>
                <p>"Visual Storytelling: Crafting Compelling Brand Stories Through Imagery"</p>
                <span>{formattedDate}</span>
              </div>
            </div>
            <div className={styles.sideContainer}>
              <img src={sideImg2} alt="" />
              <div>
                <p>“Capitalising on Instant Gratification in Social Media Marketing"</p>
                <span>{formattedDate}</span>
              </div>
            </div>
            <div className={styles.sideContainer}>
              <img src={sideImg3} alt="" />
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
