import { motion } from "framer-motion";
import styles from "./AboutCard.module.scss";

function AboutCard({ aboutRef }) {
  return (
    <div ref={aboutRef} className={styles.aboutSection}>
      <motion.div
        initial={{ transform: "translate(15px, 15px)", boxShadow: "none" }}
        whileInView={{
          transform: "translate(0px, 0px)",
          boxShadow: "15px 15px 0 var(--primary)",
        }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className={styles.aboutCard}
      >
        <div className="edu">
          <h3>Education</h3>
          <p>
            I am a Grade 11 student at Delhi Public School, R.K. Puram. I am
            also a member of Enship and Exun Clan, the Tech Club.
          </p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          I am experienced with Javascript, Typescript and Python and the web
          technologies dominating at the time:
          <br />
          <strong>core:</strong> HTML, CSS and Node.js
          <br />
          <strong>frameworks:</strong> Express, Adonis.js, React, Gatsby, NextJS
          and Django
          <br />
          <strong>databases:</strong> MongoDB, PostgreSQL, MySQL, and SQLite
          <br />
          I also have knowledge of basic shell scripting and my dotfiles can be
          found here.
          <br />
          <br />I also have experience with Mobile Development with Flutter.
        </div>
      </motion.div>
    </div>
  );
}

export default AboutCard;
