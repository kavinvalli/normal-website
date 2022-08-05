import Image from "next/image";
import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Hero({ onDownIconClick }) {
  return (
    <section className={styles.hero}>
      <motion.div
        className="image-container"
        animate={{ scale: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/kavin.jpeg" width="242" height="242" alt="Me" />
        <div className={styles.circle}></div>
        <div className={styles.overlay}></div>
      </motion.div>
      <motion.h1
        animate={{ scale: [0, 1] }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Hi! I&apos;m Kavin
      </motion.h1>
      <motion.p
        animate={{ scale: [0, 1] }}
        transition={{ delay: 0.6 }}
        style={{ textAlign: "center" }}
      >
        My name is Kavin and I&apos;m a fullstack web developer
        <br />
        I love coding in Javascript, Typescript and Python, and have worked with
        frameworks like ReactJS, VueJS, Express, and Django.
        <br />I am a developer at{" "}
        <a href="https://tricycle.life" target="_blank" rel="noreferrer">
          Tricycle
        </a>{" "}
        and the President of{" "}
        <a href="https://exunclan.com" target="_blank" rel="noreferrer">
          Exun Clan
        </a>
        , and a student at{" "}
        <a href="https://dpskrp.net" target="_blank" rel="noreferrer">
          Delhi Public School, R.K. Puram
        </a>
        <br />I am also a Chapter Officer at the{" "}
        <a href="https://newdelhi.nss.org" target="_blank" rel="noreferrer">
          New Delhi Space Society
        </a>
        , a chapter of the National Space Society
      </motion.p>
      <motion.span
        animate={{ y: 20, display: ["none", "block"] }}
        transition={{ type: "spring", bounce: 0.7, duration: 0.9, delay: 1.5 }}
        onClick={onDownIconClick}
        className={styles.down}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </motion.span>
    </section>
  );
}

export default Hero;
