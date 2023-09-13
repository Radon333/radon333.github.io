import { FunctionComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./AboutMe.module.scss";
import avatar from "../../assets/coding.gif";
import AboutContent from "../../assets/AboutMe.md";

export const AboutMe: FunctionComponent = () => {
  return (
    <div className={styles.aboutMe}>
      <Container>
        <h2 id="about" className={styles.title}>
          About me
        </h2>
        <Row>
          <Col md={7}>
            <div className={styles.text}>
              {" "}
              <AboutContent />
            </div>
          </Col>
          <Col md={5}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatar}>
                <img src={avatar} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
