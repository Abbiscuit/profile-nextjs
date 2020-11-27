import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>Navigation</a>
      </Link>

      <div className={styles.menu}>
        {/* <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link> */}
        <div className={styles.avatar}></div>
      </div>
    </div>
  );
};

export default Navigation;
