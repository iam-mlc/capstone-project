import toCamelCase from "../../../utils/toCamelCase";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const TextInput = ({ text, formik }) => {
  const inputName = toCamelCase(text);

  return (
    <>
      <label htmlFor={inputName}>{text}</label>
      <input
        type="text"
        name={inputName}
        id={inputName}
        {...formik.getFieldProps(inputName)}
      />
      <ErrorMessage name={inputName} formik={formik} />
    </>
  );
};

export default TextInput;
