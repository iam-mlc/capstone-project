import { object, string, number, date, shape } from "yup";
import { render, renderHook, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFormik } from "formik";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

describe("ErrorMessage", () => {
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
  it("should render an error message with a role of alert when errors are present", () => {
    const { getByRole } = render(
      <ErrorMessage name="firstName" formik={formik} />
    );
    expect(getByRole("alert")).toHaveTextContent("Required");
  });
  it("should not render anything when there are no errors present", () => {
    const { result } = renderHook(() =>
      useFormik({
        initialValues: { firstName: "" },
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
    const { queryByRole } = render(
      <ErrorMessage name="firstName" formik={formik} />
    );
    expect(queryByRole("alert")).not.toBeInTheDocument();
  });
});
