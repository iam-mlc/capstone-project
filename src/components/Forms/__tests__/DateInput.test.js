import { object, string, number, date, shape } from "yup";
import { render, renderHook, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFormik } from "formik";
import DateInput from "../DateInput/DateInput";

describe("DateInput", () => {
  test("renders label and input", () => {
    const initialValues = { date: "" };
    const onSubmit = jest.fn();

    const { result } = renderHook(() =>
      useFormik({
        initialValues: { date: "" },
        onSubmit: () => {
          jest.fn();
        },
        validationSchema: object().shape({
          date: date().required("Date is required"),
        }),
      })
    );
    const formik = result.current;

    render(<DateInput label={"Date"} formik={formik} />);
    const label = screen.getByText("Date");
    expect(label).toBeInTheDocument();
    const input = screen.getByLabelText("Date");
    expect(input).toBeInTheDocument();
  });
});
