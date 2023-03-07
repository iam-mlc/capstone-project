import styles from "./FirstSection.module.css";
import foodImage from "../../../../assets/restauranfood.jpg";
import Button from "../../../../components/Button/Button";
import navigationLinks from "../../../../utils/navigationLinks"

const FirstSection = () => {

  const {name: reservations, url} = navigationLinks[3]

  return (
    <div className={`${styles.hero}`}>
      <div className={`${styles.hero_details}`}>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist{" "}
        </p>
        <div className={styles.button}>
          <Button
            text={"Reserve a Table"}
            role={"link"}
            url={url}
          />
        </div>
      </div>
      <div className="hero_image">
        <img src={foodImage} alt="restaurant food" />
      </div>
    </div>
  );
};

export default FirstSection;
