import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          Hiranaya<span className="gradient-text">.dev</span>
        </a>
        
        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a>
          <a href="#contact" className="btn btn-outline" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? styles.bar1Open : styles.bar}></span>
          <span className={menuOpen ? styles.bar2Open : styles.bar}></span>
          <span className={menuOpen ? styles.bar3Open : styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
