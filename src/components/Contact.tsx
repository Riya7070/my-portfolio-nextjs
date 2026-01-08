"use client";

import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <h2 className={styles.heading}>CONTACT</h2>

      <p className={styles.subtext}>
        Have a project, question, or just want to say hi?  
        Feel free to reach out.
      </p>

      <div className={styles.container}>
        {/* Contact Info */}
        <div className={styles.info}>
          <p>
            <span>Email:</span> riyar2004oct@gmail.com
          </p>
          <p>
            <span>GitHub:</span>{" "}
            <a href="https://github.com/Riya7070" target="_blank">
              github.com/Riya7070
            </a>
          </p>
          <p>
            <span>LinkedIn:</span>{" "}
            <a href="https://linkedin.com/in/riyar7070" target="_blank">
              linkedin.com/in/riyar7070
            </a>
          </p>
        </div>

        {/* Contact Form (UI only) */}
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows={4} />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
