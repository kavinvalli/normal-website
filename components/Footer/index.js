import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© Kavin Desi Valli, {new Date().getFullYear()}</p>
      <div className="icons">
        <a href="https://github.com/kavin25" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:mail@kavin.me" target="_blank" rel="noreferrer">
          <i className="fas fa-at"></i>
        </a>
        <a
          href="https://www.facebook.com/kavin.valli.25/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://linkedin.com/in/kavinvalli"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}
