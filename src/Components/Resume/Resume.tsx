import React from "react";
import styles from "./Resume.module.scss";

type TimelineBlockProps = {
  position: "left" | "right";
  title: string;
  date: string;
  description: JSX.Element;
};

const TimelineBlock: React.FC<TimelineBlockProps> = ({
  position,
  title,
  date,
  description,
}) => (
  <div
    className={`${styles["timeline-block"]} ${
      styles[`timeline-block-${position}`]
    }`}
  >
    <div className={styles.marker}></div>
    <div className={styles["timeline-content"]}>
      <h3>{title}</h3>
      <span>{date}</span>
      {description}
    </div>
  </div>
);

const Resume: React.FC = () => (
  <section id="resume" className={styles.thirdPage}>
    <h2 className={styles.subtitle}>Work Experience</h2>
    <div className={styles.container}>
      <TimelineBlock
        position="right"
        title="Associate, Oracle"
        date="June 2023 - Present"
        description={
          <>
            <p></p>
          </>
        }
      />

      <TimelineBlock
        position="left"
        title="Software Engineer Intern, InVideo"
        date="February 2023 - July 2023"
        description={
          <>
            <p></p>
          </>
        }
      />
      <TimelineBlock
        position="right"
        title="Software Developer Intern, MobbyPark"
        date="March 2022 - April 2022"
        description={
          <>
            <p></p>
          </>
        }
      />
      <TimelineBlock
        position="left"
        title="Frontend Developer Intern, MobbyPark"
        date="September 2021 - November 2021"
        description={
          <>
            <p></p>
          </>
        }
      />

      {/* Add other TimelineBlock components here */}
    </div>
    <h2 className={styles.subtitle}>Education</h2>
    <div className={styles.container}>
      <TimelineBlock
        position="right"
        title="University Of Mumbai"
        date="2019 - 2023"
        description={
          <p>
            <strong>Bachelors of Engineering in Information Technology</strong>
            <br />
          </p>
        }
      />
      {/* Add other TimelineBlock components for education here */}
    </div>
  </section>
);

export default Resume;
