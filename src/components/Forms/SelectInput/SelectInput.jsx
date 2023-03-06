import toCamelCase from "../../../utils/toCamelCase";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const SelectInput = ({ label, formik, data }) => {
    const inputName = toCamelCase(label)

  return (
    <>
      <label htmlFor={inputName}>{label}</label>
      <select name={inputName} id={inputName} {...formik.getFieldProps(inputName)}>
        <OptionsInput data = {data}/>
      </select>
      <ErrorMessage name={inputName} formik={formik} />
    </>
  );
};

const OptionsInput = ({data}) => {

    const options = data.map((option) =>{
        return(
            <option key={option} value={`${option}`}>{option}</option>
        )
    })

    return (
        <>
            { options }
        </>
     );
}


export default SelectInput;
