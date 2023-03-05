import Button from "../../../../components/Button/Button";
import styles from "./BookingForm.module.css";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import TextInput from "../../../../components/Forms/TextInput/TextInput";
import DateInput from "../../../../components/Forms/DateInput/DateInput";
import SelectInput from "../../../../components/Forms/SelectInput/SelectInput";
import bookingHours from "../../../../utils/bookingForm/bookingHours";
import bookingOccasion from "../../../../utils/bookingForm/bookingOccasion";
import NumberInput from "../../../../components/Forms/NumberInput/NumberInput";
import validationData from "../../../../utils/bookingForm/validationData";
import initialValues from "../../../../utils/bookingForm/formik/initialValues";
import bookingSchema from "../../../../utils/bookingForm/formik/validationSchema";

const BookingForm = ({availableTimes, handleData, updateTimes}) => {

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
      handleData(values)
      setSubmitting(false);
      resetForm();
    },
  });

  useEffect(() => {
    updateTimes(formik.values.chooseDate)
  }, [formik.values.chooseDate])

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
          <SelectInput label={chooseTime.label} formik={formik} data={availableTimes} />
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
