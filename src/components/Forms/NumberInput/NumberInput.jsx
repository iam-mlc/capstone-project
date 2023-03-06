import ErrorMessage from "../ErrorMessage/ErrorMessage";
import toCamelCase from "../../../utils/toCamelCase";
import { useEffect, useState } from "react";

const NumberInput = ({ label, formik }) => {
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
        type="number"
        name={inputName}
        id={inputName}
        aria-invalid={`${isInvalid}`}
        {...formik.getFieldProps(inputName)}
      />
      <ErrorMessage name={inputName} formik={formik} />
    </>
  );
};

export default NumberInput;
