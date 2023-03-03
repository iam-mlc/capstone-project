import Button from "../Button/Button";
import styles from "./BookingForm.module.css";
import { useFormik } from 'formik';
import { object, string, number, date} from 'yup';
import { useState } from "react";
import TextInput from "./TextInput/TextInput";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import DateInput from "./DateInput/DateInput";
import SelectInput from "./SelectInput/SelectInput";
import bookingHours from "../../utils/bookingHours";
import bookingOccasion from "../../utils/bookingOccasion";


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
            chooseTime: "17:00",
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
                    <SelectInput label={"Choose time"} formik={formik} data={bookingHours}/>
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
                    <SelectInput label={"Occasion"} formik ={formik} data={bookingOccasion}/>
                </div >
                <div className={`${styles.single_col} ${styles.button}`}>
                    <Button text={"Make Your reservation"} role="submit"/>
                </div>
            </form>
        </>
     );
}

export default BookingForm;