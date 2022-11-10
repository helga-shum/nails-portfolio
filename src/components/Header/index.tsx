import React from 'react';
import styles from './Header.module.scss';
const Header: React.FC = () => {
  return (
    <>
      <header className={styles.root}>
        <a href="#" className={styles.logo}>
          <img src="img/logo.png" />
        </a>

        <ul className={styles.navbar}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">My Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>

      {/* <!---custom js link---> */}
      <script type="text/javascript" src="./script.js"></script>
    </>
  );
};

export default Header;
