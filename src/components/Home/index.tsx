import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <>
      <section className={styles.root} id="home">
        <div className={styles.text}>
          <h1>
            <span>"NAILS </span>
            ARE ALWAYS <br />
            GOOD <span>IDEA"</span>
          </h1>
          <h3>Maria Saltykova</h3>
          <a href="#" className={styles.btn}>
            Hire Me
          </a>
        </div>
      </section>

      {/* <!---custom js link---> */}
      <script type="text/javascript" src="./script.js"></script>
    </>
  );
};

export default Home;
