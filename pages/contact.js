import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "../styles/Contact.module.scss";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };
    console.log(JSON.stringify(data));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        console.log("Response succeeded!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container" style={{ minHeight: "calc(100vh - 155px)" }}>
      <h2
        style={{ fontSize: "32px", fontWeight: "600" }}
        className={styles.heading}
      >
        CONTACT ME
      </h2>
      <div className={styles.icons}>
        <a
          href="https://github.com/kavinvalli"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:mail@kavin.me" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
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
      <div className={styles.contactCard}>
        <form onSubmit={handleSubmit}>
          <h4 style={{ fontSize: "20px", fontWeight: "normal" }}>Message me</h4>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            value={message}
            placeholder="Comment"
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
