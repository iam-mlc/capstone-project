import styles from "./FourthSection.module.css";
import grids from "../../../../utils/cssGridClassNames";

const FourthSection = () => {
  return (
    <div className={`${styles.about} ${grids}`}>
      <div className={`${styles.details}`}>
        <div className={`${styles.titles}`}>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
        </div>
        <p className={`${styles.description}`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className={`${styles.images}`}>
        <div>
          <img
            src={require(`../../../../assets/Mario-and-Adrian-A.jpg`)}
            alt=""
          />
          <img
            src={require(`../../../../assets/Mario-and-Adrian-b.jpg`)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
