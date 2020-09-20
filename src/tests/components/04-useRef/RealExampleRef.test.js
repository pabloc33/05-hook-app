import React from "react";
const { shallow } = require("enzyme");
const {
  RealExampleRef,
} = require("../../../components/04-useRef/RealExampleRef");

describe("Pruebas en <RealExampleRef />", () => {
  const wrapper = shallow(<RealExampleRef />);

  test("debe mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultiplesCustomHooks").exists()).toBe(false);
  });

  test("debe de mostrar el componente <MultiplesCustomHooks />", () => {
    wrapper.find("button").simulate("click");

    expect(wrapper.find("MultiplesCustomHooks").exists()).toBe(true);
  });
});
