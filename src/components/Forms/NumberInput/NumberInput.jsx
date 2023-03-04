import ErrorMessage from "../ErrorMessage/ErrorMessage";
import toCamelCase from "../../../utils/toCamelCase";


const NumberInput = ({label, formik}) => {
    const inputName = toCamelCase(label)
  return (
    <>
      <label htmlFor={inputName}>{label}</label>
      <input
        type="number"
        name={inputName}
        id={inputName}
        {...formik.getFieldProps(inputName)}
      />
      <ErrorMessage name={inputName} formik={formik} />
    </>
  );
};

export default NumberInput;
