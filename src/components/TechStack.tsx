import styles from "@/styles/tech.module.css";

const tech = [
  "Next.js", "React", "Java","Javascript" , "Node.js",
  , "SQL", "MongoDB", "Flask", "Git","Python","HTML","CSS"
];

export default function TechStack() {
  return (
    <section id="tech" className={styles.tech}>
      <h2>Tech Stack</h2>
      <div className={styles.list}>
        {tech.map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
