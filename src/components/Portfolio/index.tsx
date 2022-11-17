import React from 'react';
import styles from './Portfolio.module.scss';
import PortfolioItem from './PortfolioItem';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchPortfolio } from '../../redux/slices/portfolioSlice';
import { useSelector } from 'react-redux';
import { Item } from '../../redux/slices/portfolioSlice';
import Skeleton from './Skeleton';
import ErrorPage from '../ErrorPage';
import { Button } from '@mui/material';
const Portfolio: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector((state: RootState) => state.portfolioReducer);
  console.log(items);
  const portfolio = items.map((obj: Item) => <PortfolioItem key={obj._id} {...obj} />);
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  React.useEffect(() => {
    dispatch(fetchPortfolio());
  }, []);

  return (
    <>
      {status == 'error' ? (
        <ErrorPage />
      ) : (
        <section className={styles.root} id="portfolio">
          <div className={styles.text}>
            <h2>My Portfolio</h2>
            <h4>Some Of My Works</h4>
          </div>

          <div className={styles.content}>{status == 'loading' ? skeleton : portfolio}</div>
          <a href="#" className={styles.btn}>
            See more
          </a>
        </section>
      )}

      {/* <!---custom js link---> */}
      <script type="text/javascript" src="./script.js"></script>
    </>
  );
};

export default Portfolio;
