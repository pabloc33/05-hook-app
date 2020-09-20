import { mount } from "enzyme";
import React from "react";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <LoginScreen />", () => {
  //wrapper //mount

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider
      value={{
        setUser,
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  );

  test("debe de mostrarse correctamente ", () => {
    //snapshot
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de utilizar el setUser con el argumento esperado ", () => {
    wrapper.find("button").prop("onClick")();

    expect(setUser).toHaveBeenCalledWith({
      id: 1234,
      name: "Fernando",
    });
  });
});
