import foodImage from "../../assets/restauranfood.jpg";
import { ReactComponent as Delivery } from "../../assets/delivery.svg";
import UnorderedList from "../UnorderedList/UnorderedList";

const assets = "../../assets"

const ProductCard = ({ image, title, price, description, url }) => {
  return (
    <>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{price}</h4>
      <p>{description}</p>
      <div>
        <a href={url}>Order a delivery</a>
        <Delivery />
      </div>
    </>
  );
};
const Testimonials = ({ name, title, review, image }) => {
  return (
    <div>
      <article>
        <h2>{title}</h2>
        <h3>{name}</h3>
        <img src={image} alt="" />
        <p>{review}</p>
      </article>
    </div>
  );
};

const Main = () => {
  const products = [
    {
      id: "Greek salad",
      image: require(`${assets}/greek-salad.jpg`),
      title: "Greek salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      url: "",
    },
    {
      id: "Bruchetta",
      image: require(`${assets}/bruchetta.jpeg`),
      title: "Bruchetta",
      price: "$ 5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      url: "",
    },
    {
      id: "Lemon Dessert",
      image: require(`${assets}/lemon-dessert.jpg`),
      title: "Lemon Dessert",
      price: "$ 5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      url: "",
    },
  ];

  const testimonials = [
    {
      id: "Rating1",
      image: "",
      title: "Rating",
      name: "Name",
      review: "Review text",
    },
    {
      id: "Rating2",
      image: "",
      title: "Rating",
      name: "Name",
      review: "Review text",
    },
    {
      id: "Rating3",
      image: "",
      title: "Rating",
      name: "Name",
      review: "Review text",
    },
  ];

  return (
    <>
      <main className="mobile-grid medium-grid large-grid">
        <section className="hero">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist{" "}
          </p>
          <a href="/reserve-a-table">Reserve a Table</a>
          <img src={foodImage} alt="restaurant food" />
        </section>
        <section className="products">
          <div>
            <h2>This weeks specials!</h2>
            <a href="/">Online Menu</a>
          </div>
          <div>
            <UnorderedList data={products} Component={ProductCard} />
          </div>
        </section>
        <section className="testimonials">
          <h2>Testimonial</h2>
          <UnorderedList data={testimonials} Component={Testimonials} />
        </section>
        <section className="about">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
          <img src={require(`${assets}/Mario-and-Adrian-A.jpg`)} alt="" />
          <img src={require(`${assets}/Mario-and-Adrian-b.jpg`)} alt="" />
        </section>
      </main>
    </>
  );
};

export default Main;
