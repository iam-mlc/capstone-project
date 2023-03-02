import BookingForm from "../../components/BookingForm/BookingForm";
import grids from "../../utils/cssGridClassNames";
import styles from "./Booking.module.css"

const Booking = () => {
    return (
        <main>
            <section className={`${grids} ${styles.form}`}>
                <BookingForm/>
            </section>
        </main>
     );
}
export default Booking;