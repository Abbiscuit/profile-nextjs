import React from 'react';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';
import Navigation from '../components/Navigation';
import Form from '../components/Form';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <header className={styles.header}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
        <p className={styles.subtitle}>
          lorem ipsum dolor sit lorem ipsum dolor sit
        </p>
        <Link href="/detail">
          <a className={styles.button}>Detail</a>
        </Link>
      </header>

      {/* <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Join our course now</h3>
        <Form />
      </section> */}

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Join our course now</h3>
        <Card />
        <Card />
      </section>

      <footer className={styles.footer}>
        <p>&copy; Course 2020</p>
      </footer>
    </div>
  );
};

export default Home;
