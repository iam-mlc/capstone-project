import { object, string, number, date, shape } from "yup";
import { render, renderHook, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFormik } from "formik";
import TextInput from "../TextInput/TextInput";

describe("TextInput", () => {
  const { result } = renderHook(() =>
    useFormik({
      initialValues: { firstName: "" },
      initialErrors: { firstName: "Required" },
      initialTouched: { firstName: true },
      onSubmit: () => {
        jest.fn();
      },
      validationSchema: object().shape({
        firstName: string()
          .min(2, "This last name is too short")
          .max(50, "This last name is too long")
          .required("Please write your last name"),
      }),
    })
  );

  const formik = result.current;
  test("renders label and input", () => {
    render(<TextInput text={"First Name"} formik={formik} />);
    const label = screen.getByText("First Name");
    expect(label).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
  test("calls formik.getFieldProps when input is changed", () => {
    const getFieldPropsSpy = jest.spyOn(formik, "getFieldProps");
    render(<TextInput text="First Name" formik={formik} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "John");
    expect(getFieldPropsSpy).toHaveBeenCalledWith("firstName");
  });
  test("sets aria-invalid attribute when there are errors", () => {
    render(<TextInput text="First Name" formik={formik} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });
  test("displays error message when there is an error", () => {
    render(<TextInput text="First Name" formik={formik} />);
    const erroMessage = screen.getByRole("alert");
    expect(erroMessage).toHaveTextContent("Required");
  });
});
