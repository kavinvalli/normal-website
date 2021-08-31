import { useState } from "react";
import styles from "../styles/Contact.module.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };
    console.log(JSON.stringify(data));
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received");
        console.log(res);
        if (res.status === 200) {
          console.log("Response succeeded!");
          setName("");
          setEmail("");
          setMessage("");
        }
      })
      .catch((e) => console.error(e.message));
  };
  return (
    <div className="container" style={{ height: "calc(100vh - 155px)" }}>
      <h2
        style={{ fontSize: "32px", fontWeight: "600" }}
        className={styles.heading}
      >
        CONTACT ME
      </h2>
      <div className={styles.icons}>
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
