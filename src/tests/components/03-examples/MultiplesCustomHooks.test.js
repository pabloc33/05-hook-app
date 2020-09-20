import { shallow } from "enzyme";
import React from "react";
import { MultiplesCustomHooks } from "../../../components/03-examples/MultiplesCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch.js";
import jestConfig from "../../../jest.config";
jest.mock("../../../hooks/useFetch.js");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultiplesCustomHooks />", () => {
  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {},
  });

  test("debe de mostrarse correctamente ", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultiplesCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar la informacion ", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Fernando",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultiplesCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find("footer").text().trim()).toBe("Fernando");
  });
});
