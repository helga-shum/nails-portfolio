import React from 'react';
import styles from './Portfolio.module.scss';
const Portfolio: React.FC = () => {
  return (
    <>
      <section className={styles.root} id="portfolio">
        <div className={styles.text}>
          <h2>My Portfolio</h2>
          <h4>Some Of My Works</h4>
        </div>

        <div className={styles.content}>
          <div className={styles.row}>
            <img src="https://i.postimg.cc/hhR4SkhX/IMG-20221010-183012-622-3.jpg" />
            <div className={styles.mainRow}>
              <div className={styles.rowText}>
                <h6>Stack M - 250 grn</h6>
              </div>
            </div>
            <h3>Alignment of the nail plate, one-color coating with design</h3>
          </div>

          <div className={styles.row}>
            <img src="https://i.postimg.cc/P5Rf6Vkv/IMG-20220920-114853-328.jpg" />
            <div className={styles.mainRow}>
              <div className={styles.rowText}>
                <h6>Stack M - 250 grn</h6>
              </div>
            </div>
            <h3>Gentle french. Nail extensions correction is performed</h3>
          </div>

          <div className={styles.row}>
            <img src="https://i.postimg.cc/V6dZXbrX/IMG-20221012-132040-739-1.jpg" />
            <div className={styles.mainRow}>
              <div className={styles.rowText}>
                <h6>Stack M - 250 grn</h6>
              </div>
            </div>
            <h3>Rich and deep color with french. Classics new way</h3>
          </div>

          <div className={styles.row}>
            <img src="https://i.postimg.cc/YqGxq36N/IMG-20221014-132338-275.jpg" />
            <div className={styles.mainRow}>
              <div className={styles.rowText}>
                <h6>Stack M - 250 grn</h6>
              </div>
            </div>
            <h3>Strengthening manicure. Extension and correction</h3>
          </div>

          <div className={styles.row}>
            <img src="https://i.postimg.cc/P5bYPFPD/IMG-20221028-132408-203.jpg" />
            <div className={styles.mainRow}>
              <div className={styles.rowText}>
                <h6>Stack M - 250 grn</h6>
              </div>
            </div>
            <h3>Smoothing, building and matte finish. Foil design</h3>
          </div>

          <div className={styles.row}>
            <img src="https://i.postimg.cc/0NWfyHBf/IMG-20221101-173812-868.jpg" />
            <div className={styles.mainRow}>
              <div className={styles.rowText}>
                <h6>Stack M - 250 grn</h6>
              </div>
            </div>
            <h3>Alignment og the nail plate and a bright coating</h3>
          </div>
          <div className={styles.row}>
            <img src="https://i.postimg.cc/CL6H7HLw/IMG-20220813-171632-042.jpg" />
            <div className={styles.mainRow}>
              <div className={styles.rowText}>
                <h6>Stack M - 250 grn</h6>
              </div>
            </div>
            <h3>Great length and bright coverage. Leveling and coating with reflective varnish</h3>
          </div>
          <div className={styles.row}>
            <img src="https://i.postimg.cc/Dwcn4TVN/IMG-20220906-173934-3.jpg" />
            <div className={styles.mainRow}>
              <div className={styles.rowText}>
                <h6>Stack M - 250 grn</h6>
              </div>
            </div>
            <h3>Extension of nails, aligment, strengthening, oating and design with rhinestones</h3>
          </div>
        </div>
      </section>

      {/* <!---custom js link---> */}
      <script type="text/javascript" src="./script.js"></script>
    </>
  );
};

export default Portfolio;
