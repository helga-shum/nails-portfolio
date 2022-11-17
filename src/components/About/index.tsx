import React from 'react';
import styles from './About.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const PreviousBtn: React.FC<{
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: 'gray', fontSize: '45px' }} />
    </div>
  );
};
const NextBtn: React.FC<{
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: 'gray', fontSize: '45px' }} />
    </div>
  );
};
const About: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <section className={styles.root} id="about">
            <div className={styles.img}>
              <img src="img/about.jpg" />
            </div>

            <div className={styles.text}>
              <h2>About Me</h2>
              <h4>Hi, Im Here To Help Your Next Project</h4>
              <p>
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem
                Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An .ac
                porta sem turpis quis leo. Nulla in feugiat elit.
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
        </div>
        <div>
          <section className={styles.root} id="about">
            <div className={styles.img}>
              <img src="img/education.jpg" />
            </div>

            <div className={styles.text}>
              <h2>About Me</h2>
              <h4>Hi, Im Here To Help Your Next Project</h4>
              <p>
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem
                Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An .ac
                porta sem turpis quis leo. Nulla in feugiat elit.
              </p>

              <a href="#" className={styles.btn}>
                Contact Me
              </a>
            </div>
          </section>
        </div>
        <div>
          <section className={styles.root} id="about">
            <div className={styles.img}>
              <img src="img/about.jpg" />
            </div>

            <div className={styles.text}>
              <h2>About Me</h2>
              <h4>Hi, Im Here To Help Your Next Project</h4>
              <p>
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem
                Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An .ac
                porta sem turpis quis leo. Nulla in feugiat elit.
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
        </div>
      </Slider>
    </>
  );
};

export default About;
