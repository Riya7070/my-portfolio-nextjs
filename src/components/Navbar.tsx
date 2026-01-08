import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>RR</span>
      <div className={styles.links}>
        <a href="#home">Home</a>
        <a href="#tech">Tech</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
