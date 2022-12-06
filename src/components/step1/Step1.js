import React from 'react';
import { Input } from '../../form/Input';
import styles from './Step1.module.css';

export const Step1 = () => {
  return (
    <form className={styles.formContainer}>
      <h1>Personal Info</h1>
      <span>Please provide your name ,email adress, and phone number.</span>
      <Input
        text="Name"
        id="name"
        type="text"
        placeholder="Type your name..."
      />
      <Input
        text="Email Adress"
        id="email"
        type="mail"
        placeholder="Type your e-mail..."
      />
      <Input
        text="Phone Number"
        id="phone"
        type="text"
        placeholder="e.g + 1 234 567 890"
      />
      <button>Next Step</button>
    </form>
  );
};
