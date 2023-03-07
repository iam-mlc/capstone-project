import styles from "./FirstSection.module.css";
import restaurantImage from "../../../../assets/restaurant.jpg";

const FirstSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.details}>
        <div className={styles.titles}>
          <h1>Book a table</h1>
          <h2>Reservations are open</h2>
        </div>
        <p className={styles.description}>
          Please fill the form bellow so you can guarantee a table for your
          friends and family. We really want you to enjoy the delicious meals we
          prepared today !
        </p>
      </div>
      <div className={styles.image}>
        <img src={restaurantImage} alt="" />
      </div>
    </div>
  );
};

export default FirstSection;
