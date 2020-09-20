const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");

describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Fernando",
    mail: "fernando@gmail.com",
  };

  test("debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("funcion");
    expect(typeof reset).toBe("funcion");
  });

  test("debe de cambiar el valor del formulario (cambiar name) ", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      });
    });

    const [formValue] = result.current;
    expect(formValue).toEqual({ ...initialForm, name: "Melissa" });
  });

  test("debe de re-establecer el formulario con Reset ", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      });
      reset();
    });

    const [formValue] = result.current;
    expect(formValue).toEqual(initialForm);
  });
});
