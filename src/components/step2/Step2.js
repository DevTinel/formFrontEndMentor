import { CardPlan } from '../cardPlan/CardPlan';
import styles from './Step2.module.css';
import Arcade from '../../assets/images/icon-arcade.svg';
import Advanced from '../../assets/images/icon-advanced.svg';
import Pro from '../../assets/images/icon-pro.svg';
import { useState } from 'react';

export const Step2 = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <section className={styles.containerStep2}>
      <h1>Select your plan</h1>
      <span>You have the option of monthly or yearly billing</span>
      {toggle ? (
        <div className={styles.containerCards}>
          <CardPlan img={Arcade} title="Arcade" price="$9/mo" description="" />
          <CardPlan
            img={Advanced}
            title="Advanced"
            price="$12/mo"
            description=""
          />
          <CardPlan img={Pro} title="Pro" price="$15/mo" description="" />
        </div>
      ) : (
        <div className={styles.containerCards}>
          <CardPlan
            img={Arcade}
            title="Arcade"
            price="$90/yr"
            description="2 months free"
          />
          <CardPlan
            img={Advanced}
            title="Advanced"
            price="$120/yr"
            description="2 months free"
          />
          <CardPlan
            img={Pro}
            title="Pro"
            price="$150/yr"
            description="2 months free"
          />
        </div>
      )}
      <div className={styles.plan}>
        <p className={toggle ? `${styles.active}` : ''}>Monthly</p>
        <button onClick={handleToggle}>
          <div
            className={
              toggle ? `${styles.activeMonth} ` : `${styles.activeYearly}`
            }
          ></div>
        </button>
        <p className={toggle ? '' : `${styles.active}`}>Yearly</p>
      </div>
    </section>
  );
};
