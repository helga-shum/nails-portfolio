import React from 'react';
import styles from './Portfolio.module.scss';
import Item from './Item';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchPortfolio } from '../../redux/slices/portfolioSlice';
import { useSelector } from 'react-redux';
const Portfolio: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchPortfolio());
  }, []);
  const { items } = useSelector((state: RootState) => state.portfolioReducer);
  console.log(items);
  const portfolio = items.map((obj) => <Item key={obj._id} {...obj} />);
  return (
    <>
      <section className={styles.root} id="portfolio">
        <div className={styles.text}>
          <h2>My Portfolio</h2>
          <h4>Some Of My Works</h4>
        </div>

        <div className={styles.content}>{portfolio}</div>
      </section>

      {/* <!---custom js link---> */}
      <script type="text/javascript" src="./script.js"></script>
    </>
  );
};

export default Portfolio;
