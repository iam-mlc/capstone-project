import Button from "../Button/Button";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
    return (
        <>
            <form action="" className={`${styles.form}`}>
                <div className={`${styles.single_col}`}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" />
                </div>
                <div className={`${styles.single_col}`}>
                    <label htmlFor="lname">First Name</label>
                    <input type="text" name="lname" id="lname" />
                </div>
                <div className={`${styles.single_col}`}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" name="date" id="res-date" />
                </div>
                <div className={`${styles.single_col}`}>
                    <label htmlFor="res-time">Choose time</label>
                    <select name="time" id="res-time">
                        <option value=""> 17:00 </option>
                        <option value=""> 18:00 </option>
                        <option value=""> 19:00 </option>
                        <option value=""> 20:00 </option>
                        <option value=""> 21:00 </option>
                        <option value=""> 22:00 </option>
                    </select>
                </div>
                <div className={`${styles.single_col}`}>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" name="guests" id="guests" min="1" max="10"/>
                </div>
                <div className={`${styles.single_col}`}>
                    <label htmlFor="occasion">Occasion</label>
                    <select name="occasion" id="occasion">
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div >
                <div className={`${styles.single_col} ${styles.button}`}>
                    <Button text={"Make Your reservation"} role="submit"/>
                </div>
            </form>
        </>
     );
}

export default BookingForm;