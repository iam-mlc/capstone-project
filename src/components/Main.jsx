import foodImage from "../assets/restauranfood.jpg"

const Main = () => {
    return (
        <>
            <main className="mobile-grid medium-grid large-grid">
                <section>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist </p>
                    <a href="/reserve-a-table">Reserve a Table</a>
                    <img src={foodImage} alt="restaurant food image" />
                </section>
            </main>
        </>
    );
}

export default Main;