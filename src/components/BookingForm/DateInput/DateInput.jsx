import toCamelCase from "../../../utils/toCamelCase";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const DateInput = ({ label, formik }) => {

    const inputName = toCamelCase(label)

  return (
    <>
      <label htmlFor={inputName}>{label}</label>
      <input
        type="date"
        name={inputName}
        id={inputName}
        {...formik.getFieldProps(inputName)}
      />
      <ErrorMessage name={inputName} formik={formik} />
    </>
  );
};

export default DateInput;
