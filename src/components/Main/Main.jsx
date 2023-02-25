import foodImage from "../../assets/restauranfood.jpg"
import { ReactComponent as Delivery } from '../../assets/delivery.svg';
import UnorderedList from "../UnorderedList/UnorderedList";


const ProductCard = ({image, title, price, description, url}) => {
    return (
        <>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <h4>{price}</h4>
        <p>{description}</p>
        <div>
            <a href={url}>Order a delivery</a>
            <Delivery/>
        </div>
        </>
    );
}

const Main = () => {
    const products = [
        {
            id: "Greek salad",
            image: require("../../assets/greek-salad.jpg"),
            title: "Greek salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
            url: ""
        },
        {
            id: "Bruchetta",
            image: require("../../assets/bruchetta.jpeg"),
            title: "Bruchetta",
            price: "$ 5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
            url: ""
        },
        {
            id: "Lemon Dessert",
            image: require("../../assets/lemon-dessert.jpg"),
            title: "Lemon Dessert",
            price: "$ 5.00",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            url: ""
        }
    ]

    return (
        <>
            <main className="mobile-grid medium-grid large-grid">
                <section className="hero">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist </p>
                    <a href="/reserve-a-table">Reserve a Table</a>
                    <img src={foodImage} alt="restaurant food" />
                </section>
                <section className="products">
                    <div>
                        <h2>
                            This weeks specials!
                        </h2>
                        <a href="/">Online Menu</a>
                    </div>
                    <div>
                        <UnorderedList data={products} Component={ProductCard}/>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Main;