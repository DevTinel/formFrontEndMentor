import React from 'react';
import { Step1 } from '../step1/Step1';
// import { Step2 } from '../step2/Step2';
// import { Step3 } from '../step3/Step3';
// import { Step4 } from '../step4/Step4';
import styles from './Steps.module.css';

export const Steps = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerItem}>
        <span className={`${styles.number} ${styles.active}`}>1</span>
        <div>
          <p className={styles.stepNumber}>STEP 1</p>
          <p className={styles.title}>YOUR INFO</p>
        </div>
      </div>
      <div className={styles.containerItem}>
        <span className={styles.number}>2</span>
        <div>
          <p className={styles.stepNumber}>STEP 2</p>
          <p className={styles.title}>SELECT PLAN</p>
        </div>
      </div>
      <div className={styles.containerItem}>
        <span className={styles.number}>3</span>
        <div>
          <p className={styles.stepNumber}>STEP 3</p>
          <p className={styles.title}>ADD-ONS</p>
        </div>
      </div>
      <div className={styles.containerItem}>
        <span className={styles.number}>4</span>
        <div>
          <p className={styles.stepNumber}>STEP 4</p>
          <p className={styles.title}>SUMMARY</p>
        </div>
      </div>
    </section>
  );
};
