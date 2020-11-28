import React from 'react';
import styles from '../styles/Card.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2578&q=80"
        alt=""
      />
      <div className={styles.content}>
        <p>
          lorem ipsum dolor sit lorem ipsum sit lorem ipsum sit lorem ipsum
          lorem ipsum dolor sit lorem ipsum
        </p>

        <div className={styles.tags}>
          <span className={styles.tag}>UI</span>
          <span className={styles.tag}>UX</span>
          <span className={styles.tag}>IA</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
