import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.topText}>Welcome to My Portfolio</p>

      <h1 className={styles.title}>
        Hi, I’m <span>Riya</span>
      </h1>

      <h2 className={styles.subtitle}>Web Developer</h2>

      <p className={styles.description}>
        Passionate about technology and building practical solutions through
        code. Always eager to learn, explore new tools, and take on real-world
        challenges. This portfolio highlights key projects and skills developed
        along the way.
      </p>

      <a href="/resume.pdf" download className={styles.resumeBtn}>
        Download My Resume
      </a>
    </section>
  );
}
