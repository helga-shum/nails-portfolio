import { style } from '@mui/system';
import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <>
      <section className={styles.root} id="about">
        <div className={styles.img}>
          <img src="img/about.jpg" />
        </div>

        <div className={styles.text}>
          <h2>About Me</h2>
          <h4>Hi, Im Here To Help Your Next Project</h4>
          <p>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum
            Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An .ac porta sem
            turpis quis leo. Nulla in feugiat elit.
          </p>
          <div className={styles.gri}>
            <div className={styles.in}>
              <h5>1. Problem Solving</h5>
            </div>

            <div className={styles.in}>
              <h5>2. Creative Idea</h5>
            </div>

            <div className={styles.in}>
              <h5>3. Search a lot</h5>
            </div>

            <div className={styles.in}>
              <h5>4. High Quality</h5>
            </div>
          </div>
          <a href="#" className={styles.btn}>
            Contact Me
          </a>
        </div>
      </section>

      {/* <!---custom js link---> */}
      <script type="text/javascript" src="./script.js"></script>
    </>
  );
};

export default About;
