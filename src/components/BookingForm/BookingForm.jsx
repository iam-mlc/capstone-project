import Button from "../Button/Button";
import styles from "./BookingForm.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import TextInput from "./TextInput/TextInput";
import DateInput from "./DateInput/DateInput";
import SelectInput from "./SelectInput/SelectInput";
import bookingHours from "../../utils/bookingForm/bookingHours";
import bookingOccasion from "../../utils/bookingForm/bookingOccasion";
import NumberInput from "./NumberInput/NumberInput";
import validationData from "../../utils/bookingForm/validationData";
import initialValues from "../../utils/bookingForm/formik/initialValues";
import bookingSchema from "../../utils/bookingForm/formik/validationSchema";

const BookingForm = () => {

    const [isValid, setValid] = useState(true);

  const [
    firstName,
    lastName,
    chooseDate,
    chooseTime,
    numberOfGuests,
    occasion,
  ] = validationData;

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: bookingSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      window.alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <div className={`${styles.single_col}`}>
          <TextInput text={firstName.label} formik={formik} />
        </div>
        <div className={`${styles.single_col}`}>
          <TextInput text={lastName.label} formik={formik} />
        </div>
        <div className={`${styles.single_col}`}>
          <DateInput label={chooseDate.label} formik={formik} />
        </div>
        <div className={`${styles.single_col}`}>
          <SelectInput label={chooseTime.label} formik={formik} data={bookingHours} />
        </div>
        <div className={`${styles.single_col}`}>
          <NumberInput label={numberOfGuests.label} formik={formik} />
        </div>
        <div className={`${styles.single_col}`}>
          <SelectInput
            label={occasion.label}
            formik={formik}
            data={bookingOccasion}
          />
        </div>
        <div className={`${styles.single_col} ${styles.button}`}>
          <Button text={"Make Your reservation"} role="submit" />
        </div>
      </form>
    </>
  );
};

export default BookingForm;
