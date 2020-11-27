import React from 'react';
import styles from '../styles/Form.module.scss';

const Form = () => {
  return (
    <form onSubmit={e => e.preventDefault()} className={styles.form}>
      <input className={styles.input} type="text" placeholder="Name" />

      <input className={styles.input} type="email" placeholder="Email" />

      <input className={styles.input} type="password" placeholder="Password" />

      <button className={styles.button} type="submit">
        Create account
      </button>
    </form>
  );
};

export default Form;
