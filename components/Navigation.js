import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navigation.module.scss';
import Image from 'next/image';

const Navigation = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>Portfolio </a>
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
        <div className={styles.avatar}>
          <Image src="/profile_abbiscuit.jpg" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
