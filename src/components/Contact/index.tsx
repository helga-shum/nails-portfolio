import React from 'react';
import styles from './Contact.module.scss';
const Contact: React.FC = () => {
  return (
    <div className={styles.root}>
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
      <section className={styles.contact} id="contact">
        <div className={styles.text}>
          <h2>Contact Me</h2>
          <h4>Let's Work Together</h4>
          <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry</p>
          <div className={styles.list}>
            <li>
              <a href="#">Ukraine, Dnipro region, Vasylkivka</a>
            </li>
            <li>
              <a href="#">maria.saltykova@gmail.com</a>
            </li>
            <li>
              <a href="#">+380688780194</a>
            </li>
          </div>
          <div className={styles.icons}>
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-tiktok"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="#">
              <i className="bx bxl-telegram"></i>
            </a>
          </div>
        </div>

        <div className={styles.form}>
          <form action="">
            <input type="" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Your Email" required />
            <input type="" placeholder="Enter Your Phone" />
            <textarea
              name=""
              id=""
              cols={40}
              rows={10}
              placeholder="Enter Your Message"
              required></textarea>
            <input type="submit" value="Submit" className={styles.send} />
          </form>
        </div>
      </section>

      {/* <!---custom js link---> */}
      <script type="text/javascript" src="./script.js"></script>
    </div>
  );
};

export default Contact;
