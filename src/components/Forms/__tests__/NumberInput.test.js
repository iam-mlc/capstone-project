import { object, string, number, date, shape } from "yup";
import { render, renderHook, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFormik } from "formik";
import NumberInput from "../NumberInput/NumberInput";

describe("TextInput", () => {
  const { result } = renderHook(() =>
    useFormik({
      initialValues: { numberOfGuests: "" },
      initialErrors: { numberOfGuests: "Required" },
      initialTouched: { numberOfGuests: true },
      onSubmit: () => {
        jest.fn();
      },
      validationSchema: object().shape({
        numberOfGuests: number()
          .integer()
          .min(1, "Number has to be larger than 0")
          .max(10, `Sorry ! Our tables only take a maximum of 10 guests`)
          .required("Please write the number of guests"),
      }),
    })
  );

  const formik = result.current;
  test("renders label and input", () => {
    render(<NumberInput label={"Number of Guests"} formik={formik} />);
    const label = screen.getByText("Number of Guests");
    expect(label).toBeInTheDocument();
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });
  test("displays error message when there is an error", () => {
    render(<NumberInput label="Number of Guests" formik={formik} />);
    const erroMessage = screen.getByRole("alert");
    expect(erroMessage).toHaveTextContent("Required");
  });
});
