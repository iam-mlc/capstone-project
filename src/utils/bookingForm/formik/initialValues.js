import validationData from "../validationData";
import toCamelCase from "../../toCamelCase";

let initialValues = {};

validationData.forEach((item) => {
  const property = toCamelCase(item.label);
  initialValues[property] = item.value;
});

export default initialValues;
