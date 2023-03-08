import { object, string, number, date, shape } from "yup";
import { render, renderHook, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFormik } from "formik";
import SelectInput from "../SelectInput/SelectInput";

describe("SelectInput", () => {
  const { result } = renderHook(() =>
    useFormik({
      initialValues: { selectAnOption: "" },
      onSubmit: () => {
        jest.fn();
      },
    })
  );
  const formik = result.current;
  test("renders the select input with label and options", () => {
    const data = ["Option 1", "Option 2", "Option 3"];
    const label = "Select an option";
    const labelElement = screen.getByLabelText(label);
    const selectElement = screen.getByRole("combobox");
    const optionElements = screen.getAllByRole("option");

    render(<SelectInput label={label} data={data} formik={formik} />);
    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toHaveLength(data.length);
    expect(optionElements).toHaveLength(data.length);
    optionElements.forEach((optionElement, index) => {
      expect(optionElement).toHaveValue(data[index]);
      expect(optionElement).toHaveTextContent(data[index]);
    });
  });
});
