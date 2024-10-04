import React from "react";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <h3>Be the First to Know</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </form>
        </div>
        <div className={styles.info}>
          <p>
            Contact us at:{" "}
            <a href="mailto:contact@company.com">contact@company.com</a>
          </p>
          <p>Phone: +1 234 567 890</p>
          <p>
            Follow us on:
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            ,
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
