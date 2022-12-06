import React from 'react';
import { Step1 } from '../step1/Step1';
import { Step2 } from '../step2/Step2';
import { Steps } from '../steps/Steps';
import styles from './ContainerSteps.module.css';

export const ContainerSteps = () => {
  return (
    <main className={styles.containerHome}>
      <Steps />
      <Step2 />
    </main>
  );
};
