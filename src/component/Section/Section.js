import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.form}>
      <h1 className={styles.name}>{title}</h1>
      {children}
    </div>
  );
};
export default Section;
