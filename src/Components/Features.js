/** @format */

import React from "react";
import styles from "../styles/Features.module.css";

import featuresImg from "../assets/5a8e56a95c86c7cb47e483dd255450c3.png";

function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.layout}>
        <div className={styles.container}>
          <div className={styles.featuresDescription}>
            <header>
              <span>Features</span>
              <h2>Fuel Your Strategy;Discover Our Core Features</h2>
            </header>
            <main>
              <div>
                <header>
                  <h3>Social Media Scheduling</h3>
                </header>
                <article>
                  Seamlessly plan and manage your content calendar. Stay consistent and engaging
                  with scheduled posts that capture your audience's attention.
                </article>
              </div>
              <div>
                <header>
                  <h3>Target Audience Analysis</h3>
                </header>
                <article>
                  Dive deep into your audience demographics and preferences. Uncover insights that
                  fuel personalized content creation and strategic refinement.
                </article>
              </div>
              <div>
                <header>
                  <h3>Engagement Tracking</h3>
                </header>
                <article>
                  Monitor interactions and sentiment. Respond promptly, nurture connections, and
                  adapt your approach to foster meaningful relationships.
                </article>
              </div>
              <div>
                <header>
                  <h3>Performance Analytics</h3>
                </header>
                <article>
                  Move beyond numbers to insights. Our analytics reveal the stories behind the
                  metrics, enabling strategic decisions that drive tangible growth.
                </article>
              </div>
            </main>
          </div>
          <div>
            <img src={featuresImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
