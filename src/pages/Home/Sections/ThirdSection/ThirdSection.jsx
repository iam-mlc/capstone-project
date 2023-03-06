import UnorderedList from "../../../../components/UnorderedList/UnorderedList";
import testimonials from "../../../../utils/testimonials";
import styles from "./ThirdSection.module.css";
import grids from "../../../../utils/cssGridClassNames";

const TestimonialsCard = ({ name, title, review, image }) => {
  return (
    <>
      <article className={`${styles.card}`}>
        <h2 className={`${styles.rating}`}>{title}</h2>
        <div className={`${styles.person}`}>
          <h3>{name}</h3>
          <img src={image} alt="" />
        </div>
        <p className={`${styles.review}`}>{review}</p>
      </article>
    </>
  );
};

const ThirdSection = () => {
  const style = {
    parent: styles.list,
    child: styles.list_item,
  };

  return (
    <div className={`${styles.testimonials} ${grids}`}>
      <div className={`${styles.title}`}>
        <h2>Testimonial</h2>
      </div>
      <div role="list">
        <UnorderedList
          data={testimonials}
          Component={TestimonialsCard}
          styleElement={style}
          role="listitem"
        />
      </div>
    </div>
  );
};

export default ThirdSection;
