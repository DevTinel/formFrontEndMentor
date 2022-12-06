import React, { useState } from 'react';
import { CardPlan } from '../cardPlan/CardPlan';
import styles from './Step2.module.css';
import Arcade from '../../assets/images/icon-arcade.svg';
import Advanced from '../../assets/images/icon-advanced.svg';
import Pro from '../../assets/images/icon-pro.svg';

export const Step2 = () => {
  return (
    <section className={styles.containerStep2}>
      <h1>Select your plan</h1>
      <span>You have the option of monthly or yearly billing</span>
      <div className={styles.containerCards}>
        <CardPlan img={Arcade} title="Arcade" price="$9/mo" />
        <CardPlan img={Advanced} title="Advanced" price="$12/mo" />
        <CardPlan img={Pro} title="Pro" price="$15/mo" />
      </div>
      <div className={styles.plan}>
        <p className={styles.active}>Monthly</p>
        <button>
          <div id="bol"></div>
        </button>
        <p>Yearly</p>
      </div>
    </section>
  );
};
