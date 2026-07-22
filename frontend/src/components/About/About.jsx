import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        
        <div className={styles.contentWrapper}>
          <div className={`glass ${styles.textContent}`}>
            <p>
              I am a third-year B.Sc. (Hons) Information Technology undergraduate specializing in 
              <span className={styles.highlight}> Data Science</span> at Sri Lanka Institute of Information Technology (SLIIT). 
            </p>
            <p>
              My passion lies in <span className={styles.highlight}>Artificial Intelligence, Machine Learning, Data Science, and Full-Stack Development</span>. 
              I have practical experience developing AI-powered applications using Python, CrewAI, Google Gemini, React, Spring Boot, Flask, and MongoDB.
            </p>
            <p>
              I have built a strong foundation in machine learning, computer vision, NLP, and multi-agent AI systems through various academic projects, hackathons, and leadership activities.
            </p>
          </div>

          <div className={styles.educationSection}>
            <h3 className={styles.subTitle}>Education</h3>
            <div className={`glass ${styles.eduCard}`}>
              <h4>Sri Lanka Institute of Information Technology (SLIIT)</h4>
              <p className={styles.degree}>B.Sc. (Hons) in Information Technology</p>
              <p className={styles.specialization}>Specialization: Data Science (2024 – Present)</p>
              <p className={styles.gpa}>Current GPA: 3.68</p>
            </div>
            
            <div className={`glass ${styles.eduCard}`}>
              <h4>ST. Thomas’ Girls’ High School, Matara</h4>
              <p className={styles.degree}>GCE Advanced Level</p>
              <p className={styles.specialization}>Physical Science (2022)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
