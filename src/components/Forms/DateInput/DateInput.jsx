import toCamelCase from "../../../utils/toCamelCase";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";

const DateInput = ({ label, formik }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const inputName = toCamelCase(label);

  useEffect(() => {
    if (formik.errors[inputName]) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  }, [formik.errors[inputName]]);

  return (
    <>
      <label htmlFor={inputName}>{label}</label>
      <input
        type="date"
        name={inputName}
        id={inputName}
        aria-invalid={`${isInvalid}`}
        {...formik.getFieldProps(inputName)}
      />
      <ErrorMessage name={inputName} formik={formik} />
    </>
  );
};

export default DateInput;
