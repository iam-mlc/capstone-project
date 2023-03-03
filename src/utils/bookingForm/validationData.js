import toCamelCase from "../toCamelCase";
import { object, string, number, date } from "yup";
import currentDate from "./currentDate";

const inputLabels = [
  "First Name",
  "Last Name",
  "Choose date",
  "Choose time",
  "Number of guests",
  "Occasion",
];

let initialValues = {};

let validationData = [
  {
    label: "First Name",
    schema: string()
      .min(2, "This first name is too short")
      .max(50, "This first name is too long")
      .required("Please write your first name"),
    value: "",
  },
  {
    label: "Last Name",
    schema: string()
      .min(2, "This last name is too short")
      .max(50, "This last name is too long")
      .required("Please write your last name"),
    value: "",
  },
  {
    label: "Choose date",
    schema: date()
      .required("Please choose a date")
      .min(currentDate, "Please choose a date starting from today"),
    value: "",
  },
  {
    label: "Choose time",
    schema: "",
    value: "16:00",
  },
  {
    label: "Number of guests",
    schema: number()
      .integer()
      .min(1, "Number has to be larger than 0")
      .max(10, `Sorry ! Our tables only take a maximum of 10 guests`)
      .required("Please write the number of guests"),
    value: "",
  },
  {
    label: "Occasion",
    schema: "",
    value: "Birthday",
  },
];

export default validationData;
