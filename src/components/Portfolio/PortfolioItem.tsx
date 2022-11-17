import React from 'react';
import styles from './Portfolio.module.scss';
type ItemProps = {
  _id: string;
  imageUrl: string;
  price: number;
  text: string;
};
const PortfolioItem: React.FC<ItemProps> = ({ _id, imageUrl, price, text }) => {
  return (
    <>
      <div className={styles.row}>
        <img src={imageUrl} />
        <div className={styles.mainRow}>
          <div className={styles.rowText}>
            <h6>{price} grn</h6>
          </div>
        </div>
        <h3>{text}</h3>
      </div>
    </>
  );
};

export default PortfolioItem;
