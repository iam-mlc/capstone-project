import UnorderedList from "../../../../components/UnorderedList/UnorderedList";
import products from "../../../../utils/products";
import styles from "./SecondSection.module.css";
import { ReactComponent as Delivery } from "../../../../assets/delivery.svg";
import Button from "../../../../components/Button/Button";
import grids from "../../../../utils/cssGridClassNames";

const ProductCard = ({ image, title, price, description, url }) => {
  return (
    <>
      <div className={`${styles.image}`}>
        <img src={image} alt={title} />
      </div>
      <div className={`${styles.details}`}>
        <div className={`${styles.title}`}>
          <h3>{title}</h3>
          <h4>{price}</h4>
        </div>
        <p className={`${styles.text}`}>{description}</p>
          <a href={url} className={`${styles.button}`}>
            <span>Order a delivery</span>
            <Delivery />
          </a>
      </div>
    </>
  );
};

const SecondSection = () => {

  const style = {
    parent: styles.list,
    child: styles.list_item,
  };

  return (
    <div className={`${styles.products} ${grids}`}>
      <div>
        <h2>This weeks specials!</h2>
        <Button text={"Online Menu"} role={"link"}/>
      </div>
      <div className="">
        <UnorderedList
          data={products}
          Component={ProductCard}
          styleElement={style}
        />
      </div>
    </div>
  );
};

export default SecondSection;
