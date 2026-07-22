import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <p className={styles.greeting}>Hi, I am</p>
          <h1 className={styles.name}>Hiranya<br/>Abeywickrama</h1>
          <h2 className={styles.title}>
            <span className="gradient-text">Data Science</span> Specializer & <br />
            <span className="gradient-text">Full-Stack</span> Developer
          </h2>
          <p className={styles.description}>
            Passionate about Artificial Intelligence, Machine Learning, and building scalable full-stack applications.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.abstractShape}>
            <div className={styles.glowCircle}></div>
            <div className={styles.glassCard}>
              <div className={styles.codeSnippet}>
                <span className={styles.codeKeyword}>const</span>
                <span className={styles.codeVar}> focus</span>
                <span className={styles.codeOp}> =</span>
                <span className={styles.codeArray}> ['AI', 'Data', 'Web']</span>;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
