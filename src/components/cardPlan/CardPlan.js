import styles from './CardPlan.module.css';

export const CardPlan = ({ img, title, price, description }) => {
  return (
    <button className={styles.containerCard}>
      <img src={img} alt={title} />
      <div className={styles.descriptionCard}>
        <b>{title}</b>
        <span>{price}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </button>
  );
};
