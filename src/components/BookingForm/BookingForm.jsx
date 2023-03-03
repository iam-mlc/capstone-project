import Button from "../Button/Button";
import styles from "./BookingForm.module.css";
import { useFormik } from 'formik';
import { object, string, number, date} from 'yup';
import { useState } from "react";
import TextInput from "./TextInput/TextInput";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import DateInput from "./DateInput/DateInput";


const BookingForm = () => {
    const today = new Date();
    const day = today.getDate();
    const year = today.getFullYear();
    const month = today.getMonth();
    const minimumDate = `${year}-${month + 1 }-${day}`

    const [isValid, setValid] = useState(true)

    const bookingSchema = object({
        firstName: string().min(2, "This first name is too short").max(50, "This first name is too long").required("Please write your first name"),
        lastName: string().min(2, "This last name is too short").max(50, "This last name is too long").required("Please write your last name"),
        chooseDate: date().required("Please choose a date").min(minimumDate, "Please choose a date starting from today"),
        guests: number().integer().min(1,"Number has to be larger than 0").max(10, `Sorry ! Our tables only take a maximum of 10 guests`).required("Please write the number of guests"),
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            chooseDate:"",
            time: "17:00",
            guests: "",
            occasion: "Birthday",
        },
        validationSchema: bookingSchema,
        onSubmit: (values, {setSubmitting, resetForm}) =>{
            window.alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
            resetForm()
        }
    });

    const handleSubmit = (e) =>{
        e.preventDefault()
        formik.handleSubmit()
    }


    return (
        <>
            <form onSubmit={handleSubmit} className={`${styles.form}`}>
                <div className={`${styles.single_col}`}>
                    <TextInput text ={"First Name"} formik = {formik}/>
                </div>
                <div className={`${styles.single_col}`}>
                    <TextInput text ={"Last Name"} formik = {formik}/>
                </div>
                <div className={`${styles.single_col}`}>
                    <DateInput label={"Choose date"} formik={formik}/>
                </div>
                <div className={`${styles.single_col}`}>
                    <label htmlFor="res-time">Choose time</label>
                    <select name="time" id="res-time" {...formik.getFieldProps("time")}>
                        <option value="17:00"> 17:00 </option>
                        <option value="18:00"> 18:00 </option>
                        <option value="19:00"> 19:00 </option>
                        <option value="20:00 "> 20:00 </option>
                        <option value="21:00"> 21:00 </option>
                        <option value="22:00"> 22:00 </option>
                    </select>
                    <ErrorMessage name={"time"} formik={formik}/>
                </div>
                <div className={`${styles.single_col}`}>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        name="guests"
                        id="guests"
                        min="1"
                        max="10"
                        {...formik.getFieldProps("guests")}
                    />
                    <ErrorMessage name={"guests"} formik={formik}/>
                </div>
                <div className={`${styles.single_col}`}>
                    <label htmlFor="occasion">Occasion</label>
                    <select name="occasion" id="occasion" {...formik.getFieldProps("occasion")}>
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