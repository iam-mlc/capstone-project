import UnorderedList from "../../../../components/UnorderedList/UnorderedList";
import products from "../../../../utils/products";
import styles from "./SecondSection.module.css";
import { ReactComponent as Delivery } from "../../../../assets/delivery.svg";
import Button from "../../../../components/Button/Button";
import grids from "../../../../utils/cssGridClassNames";
import navigationLinks from "../../../../utils/navigationLinks";

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

  const {name: orderOnline, url} = navigationLinks[4]

  const style = {
    parent: styles.list,
    child: styles.list_item,
  };

  return (
    <div className={`${styles.products} `} role="region" aria-labelledby="products-heading products-button">
      <div>
        <h2 id="products-heading">This weeks specials!</h2>
        <Button text={"Online Menu"} role={"link"} url={url} id="products-button"/>
      </div>
      <div className="" role="list">
        <UnorderedList
          data={products}
          Component={ProductCard}
          styleElement={style}
          role="listitem"
        />
      </div>
    </div>
  );
};

export default SecondSection;
