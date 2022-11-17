import { TabContext, TabList } from '@mui/lab';
import { getSelectUtilityClasses, Tab } from '@mui/material';
import React from 'react';
import styles from './Services.module.scss';

const Services: React.FC = () => {
  const [value, setValue] = React.useState('1');
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <section className={styles.root} id="services">
        <div className={styles.text}>
          <h2>My Services</h2>
          <h4>Better Design, Better Expericences</h4>
        </div>
        <TabContext value={value}>
          <TabList
            style={{ marginBottom: 15 }}
            onChange={handleChange}
            aria-label="lab API tabs example">
            <Tab label="Новые" value="1" />
            <Tab label="Популярные" value="2" />
          </TabList>
        </TabContext>
        {value == '1' ? (
          <>
            <div className={styles.text}>
              <h4>Price list</h4>
            </div>
            <div className={styles.content}>
              <div className={styles.gri}>
                <div className={styles.in}>
                  <h5>1. Basic(manicure with coating) - 250 grn</h5>
                </div>
                <div className={styles.in}>
                  <h5>2. Classic(manicure without coating) - 180 grn</h5>
                </div>
                <div className={styles.in}>
                  <h5>3. Strong(manicure with strengthening) - 300 grn</h5>
                </div>
                <div className={styles.in}>
                  <h5>4. IBX without coating - 259 grn </h5>
                </div>
                <div className={styles.in}>
                  <h5>5. IBX with coating - 400 grn</h5>
                </div>
                <div className={styles.in}>
                  <h5>6.French - 30 grn</h5>
                </div>
                <div className={styles.in}>
                  <h5>7. Design of one nail - 5 grn</h5>
                </div>
                <div className={styles.in}>
                  <h5>8. Multi-finger design - as a gift</h5>
                </div>
                <div className={styles.in}>
                  <h5>9. Nail extensions with gel tips - 350 grn</h5>
                </div>
                <div className={styles.in}>
                  <h5> Nail extensions correction</h5>
                </div>
                <div className={styles.in}>
                  <h5>10. Length 1-3 - 300 grn</h5>
                </div>
                <div className={styles.in}>
                  <h5>11. Length 4+ - 350 grn</h5>
                </div>
                <div className={styles.in}>
                  <h5>12. Nail repair(separate from manicure) - 40 grn</h5>
                </div>
                <div className={styles.in}>
                  <h5>
                    Nail repair during nail extensions correction is included in the price of the
                    service
                  </h5>
                </div>
              </div>
              <div className={styles.img}>
                <img src="img/service.jpg" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.text}>
              <h4>You will get</h4>
            </div>
            <div className={styles.content}>
              <div className={styles.row}>
                <img src="https://i.postimg.cc/y8VJHhSR/IMG-20220819-180052.jpg" />
                <div className={styles.mainRow}>
                  <div className={styles.rowText}>
                    <h6>Three-stage sterilization of instruments</h6>
                  </div>
                </div>
                <h3>1. Desinfection in DELANOL sulution(certified in Ukraine)</h3>
                <h3>2. Mechanical cleaning</h3>
                <h3>3. Temperature sterilization</h3>
              </div>

              <div className={styles.row}>
                <img src="https://i.postimg.cc/Njw7cK1X/IMG-20220811-102613.jpg" />
                <div className={styles.mainRow}>
                  <div className={styles.rowText}>
                    <h6>Work of the certified naster</h6>
                  </div>
                </div>
                <h3>1. Gel polish</h3>
                <h3>2. Combined manicure</h3>
                <h3>3. Nail modeling upper forms</h3>
              </div>

              <div className={styles.row}>
                <img src="https://i.postimg.cc/gkxSKR0v/IMG-20220817-000108-755.jpg" />
                <div className={styles.mainRow}>
                  <div className={styles.rowText}>
                    <h6>Satisfaction with the process and the result</h6>
                  </div>
                </div>
                <h3>1. Nice atmosphere</h3>
                <h3>2. Following the client's wishes</h3>
                <h3>3. Diversity. Different manicure tchniques</h3>
              </div>
            </div>
          </>
        )}
      </section>

      {/* <!---custom js link---> */}
      <script type="text/javascript" src="./script.js"></script>
    </>
  );
};

export default Services;
