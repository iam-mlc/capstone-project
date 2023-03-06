import toCamelCase from "../../toCamelCase";
import validationData from "../validationData";
import { object } from "yup";

let schema = {};

validationData.forEach((item) => {
  const property = toCamelCase(item.label);
  schema[property] = item.schema;
});

const bookingSchema = object(schema);

export default bookingSchema;
