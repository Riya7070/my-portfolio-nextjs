"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import styles from "@/styles/projects.module.css";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        PROJECTS
      </motion.h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className={styles.image}>
              <img src={project.image} alt={project.title} />
            </div>

            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className={styles.overlay}>
              <div className={styles.buttons}>
                <a href={project.github} target="_blank">
                  <FaGithub /> Explore
                </a>

                {project.demo && (
                  <a href={project.demo} target="_blank">
                    Demo
                  </a>
                )}
              </div>

              <div className={styles.tech}>
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
