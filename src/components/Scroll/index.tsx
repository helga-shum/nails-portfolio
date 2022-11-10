import React from 'react';
import styles from './Scroll.module.scss';
const Scroll: React.FC = () => {
  return (
    <>
      {/* <!---scroll-top---> */}
      <a href="#" className={styles.root}>
        <i className="bx bx-up-arrow-alt"></i>
      </a>

      <script src="https://unpkg.com/scrollreveal"></script>

      {/* <!---custom js link---> */}
      <script type="text/javascript" src="./script.js"></script>
    </>
  );
};

export default Scroll;
