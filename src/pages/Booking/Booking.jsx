import { useEffect, useState } from "react";
import BookingForm from "./Sections/SecondSection/BookingForm";
import grids from "../../utils/cssGridClassNames";
import styles from "./Booking.module.css";
import bookingHours from "../../utils/bookingForm/bookingHours";
import FirstSection from "./Sections/FirstSection/FirstSection";
import { fetchAPI, submitAPI } from "../../utils/bookingForm/api";

const Booking = () => {
  const [availableTimes, setAvailableTimes] = useState([...bookingHours]);
  const [data, setData] = useState([]);


  const updateTimes = (date) => {
      const times = date === "" ? fetchAPI(new Date) : fetchAPI(new Date(date))
      setAvailableTimes(times)
  };
  const handleData = (data) => {
      setData(data)
  };


  return (
    <main className={`${grids} ${styles.main}`}>
      <section>
        <FirstSection />
      </section>
      <section>
        <BookingForm availableTimes={availableTimes} handleData={handleData} updateTimes={updateTimes} />
      </section>
    </main>
  );
};
export default Booking;
