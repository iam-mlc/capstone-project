import { useEffect, useState } from "react";
import toCamelCase from "../../../utils/toCamelCase";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const SelectInput = ({ label, formik, data }) => {
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
      <select
        name={inputName}
        id={inputName}
        {...formik.getFieldProps(inputName)}
        aria-invalid={`${isInvalid}`}
      >
        <OptionsInput data={data} />
      </select>
      <ErrorMessage name={inputName} formik={formik} />
    </>
  );
};

const OptionsInput = ({ data }) => {
  const options = data.map((option) => {
    return (
      <option key={option} value={`${option}`}>
        {option}
      </option>
    );
  });

  return <>{options}</>;
};

export default SelectInput;
