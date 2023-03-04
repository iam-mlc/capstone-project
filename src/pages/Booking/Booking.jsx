import { useState } from "react";
import BookingForm from "./Sections/SecondSection/BookingForm";
import grids from "../../utils/cssGridClassNames";
import styles from "./Booking.module.css";
import bookingHours from "../../utils/bookingForm/bookingHours";
import FirstSection from "./Sections/FirstSection/FirstSection";

const Booking = () => {
  const [availableTimes, setAvailableTimes] = useState([...bookingHours]);
  const updateTimes = (slots) =>{
      setAvailableTimes(slots)
  }
  const initializeTimes = () =>{

  }

  return (
    <main className={`${grids} ${styles.main}`}>
      <section>
        <FirstSection/>
      </section>
      <section>
        <BookingForm availableTimes={availableTimes}/>
      </section>
    </main>
  );
};
export default Booking;
