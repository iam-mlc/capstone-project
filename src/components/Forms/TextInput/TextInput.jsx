import { useEffect, useState } from "react";
import toCamelCase from "../../../utils/toCamelCase";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const TextInput = ({ text, formik }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const inputName = toCamelCase(text);

  useEffect(() => {
    if (formik.errors[inputName]) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  }, [formik.errors[inputName]]);

  return (
    <>
      <label htmlFor={inputName}>{text}</label>
      <input
        type="text"
        name={inputName}
        id={inputName}
        aria-invalid={`${isInvalid}`}
        {...formik.getFieldProps(inputName)}
      />
      <ErrorMessage name={inputName} formik={formik} />
    </>
  );
};

export default TextInput;
