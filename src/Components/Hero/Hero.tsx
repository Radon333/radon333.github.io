import { FunctionComponent } from "react";

import styles from "./Hero.module.scss";
export const Hero: FunctionComponent = () => {
  return (
    <div id="hero" className={styles.heroMain}>
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.title}>
            Hey👋, I'm <span className={styles.highlighted}>Ranveer Shah</span>
            <br />
          </h1>
          <h2 className={styles.title2}>Software Engineer.</h2>
          <br />
          <p className={styles.subtitle}>
            A developer interested in tech trends and web technologies.
            <br /> AI and open-source enthusiast.
          </p>
        </div>
      </header>
    </div>
  );
};
