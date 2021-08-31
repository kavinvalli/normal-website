import Image from "next/image";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="image-container">
        <Image src="/kavin.jpeg" width="242" height="242" alt="Me" />
        <div className={styles.circle}></div>
        <div className={styles.overlay}></div>
      </div>
      <h1>Hi! I&apos;m Kavin</h1>
      <p style={{ textAlign: "center" }}>
        My name is Kavin and I&apos;m a fullstack web developer
        <br />
        I love coding in Javascript, Typescript and Python, and have worked with
        frameworks like ReactJS, VueJS, Express, and Django.
        <br />I am a developer at{" "}
        <a href="https://tricycle.life" target="_blank" rel="noreferrer">
          Tricycle
        </a>{" "}
        and{" "}
        <a href="https://exunclan.com" target="_blank" rel="noreferrer">
          Exun Clan
        </a>
        , and a student at{" "}
        <a href="https://dpskrp.net" target="_blank" rel="noreferrer">
          Delhi Public School, R.K. Puram
        </a>
        <br />I am also a volunteer(developer) at the New Delhi Space Society, a
        chapter of the National Space Society
      </p>
      <i className={`fas fa-chevron-down ${styles.down}`}></i>
    </section>
  );
}

export default Hero;
