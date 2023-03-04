import { useState } from "react";
import BookingForm from "../../components/Forms/BookingForm/BookingForm";
import grids from "../../utils/cssGridClassNames";
import styles from "./Booking.module.css";
import bookingHours from "../../utils/bookingForm/bookingHours";

const Booking = () => {
  const [availableTimes, setAvailableTimes] = useState([...bookingHours]);

  return (
    <main>
      <section className={`${grids} ${styles.form}`}>
        <BookingForm />
      </section>
    </main>
  );
};
export default Booking;
