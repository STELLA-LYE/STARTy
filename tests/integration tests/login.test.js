import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";

import Login from '../../src/screens/login'; 

const flushMicrotasksQueue = () =>
  new Promise((resolve) => setImmediate(resolve));

  it("renders default elements", () => {
    const { getAllByText, getByPlaceholderText } = render(<Login />);
  
    expect(getAllByText("Welcome Back!").length).toBe(1);
    getByPlaceholderText("Email");
    getByPlaceholderText("Password");
  });
  
  it("handles valid input submission", async () => {
    // fetch.mockResponseOnce(JSON.stringify({ passes: true }));

    const navigation = {navigate: () => {}}
    // spyOn(navigation, 'navigate'); 
    jest.spyOn(navigation, 'navigate'); 

    const { getByTestId } = render(<Login navigation={navigation} />);
    const page = render(<Login navigation={navigation}/>); 
  
    fireEvent.changeText(getByTestId("Login.emailInput"), "Test1@gmail.com");
    fireEvent.changeText(getByTestId("Login.passwordInput"), "123456");
    fireEvent.press(getByTestId("LoginButton"));
  
    const loginButton = page.getByTestId('LoginButton'); 
    fireEvent.press(loginButton); 

    expect(navigation.navigate).toHaveBeenCalledWith("Main Tab"); 

  });