import React from 'react';
import styles from './Input.module.css';

export const Input = ({ text, id, name, type, placeholder }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} />
    </div>
  );
};
