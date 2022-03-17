import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© Kavin Desi Valli, {new Date().getFullYear()}</p>
      <div className="icons">
        <a
          href="https://github.com/kavinvalli"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:mail@kavin.me" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faAt} />
        </a>
        <a
          href="https://www.facebook.com/kavin.valli.25/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://linkedin.com/in/kavinvalli"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}
