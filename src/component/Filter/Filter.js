import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <input
        className={styles.lfInput}
        placeholder="Find contacts by name"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;
