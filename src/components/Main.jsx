import foodImage from "../assets/restauranfood.jpg"
import { ReactComponent as Delivery } from '../assets/delivery.svg';


const Products = ({data}) => {
    return (
        <ul>
            <List data = {data}/>
        </ul>
    );
}
const List = ({data}) =>{

    const listItem = (list) => {

        return list.map(item =>{

            const {image, title, price, description, url} = item

            return(
                <li key={title}>
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <h4>{price}</h4>
                    <p>{description}</p>
                    <div>
                        <a href={url}>Order a delivery</a>
                        <Delivery/>
                    </div>
                </li>
            )
        })
    }

    return(
        <>
            {

                listItem(data)

            }

        </>
    )
}

const Main = () => {
    const products = [
        {
            image: require("../assets/greek-salad.jpg"),
            title: "Greek salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
            url: ""
        },
        {
            image: require("../assets/bruchetta.jpeg"),
            title: "Bruchetta",
            price: "$ 5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
            url: ""
        },
        {
            image: require("../assets/lemon-dessert.jpg"),
            title: "Lemon Dessert",
            price: "$ 5.00",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            url: ""
        }
    ]
    return (
        <>
            <main className="mobile-grid medium-grid large-grid">
                <section>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist </p>
                    <a href="/reserve-a-table">Reserve a Table</a>
                    <img src={foodImage} alt="restaurant food" />
                </section>
                <section>
                    <div>
                        <h2>
                            This weeks specials!
                        </h2>
                        <a href="/">Online Menu</a>
                    </div>
                    <div>
                        <Products data={products}/>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Main;