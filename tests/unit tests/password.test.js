import React from 'react'
import SignUp from '../../src/screens/signup';
import { fireEvent, render, spyOn} from '@testing-library/react-native'; 
import { Alert } from 'react-native';

const flushMicrotasksQueue = () =>
  new Promise((resolve) => setImmediate(resolve));

  it("renders default elements", () => {
    const { getAllByText, getByPlaceholderText } = render(<SignUp />);
  
    expect(getAllByText("Register").length).toBe(1);
    getByPlaceholderText("Enter your email");
    getByPlaceholderText("Enter your password");
  });
  
  it("handles invalid email input submission", async () => {
    // fetch.mockResponseOnce(JSON.stringify({ passes: true }));

    const navigation = {navigate: () => {}}
    // spyOn(navigation, 'navigate'); 
    jest.spyOn(navigation, 'navigate'); 
    jest.spyOn(Alert, 'alert');

    const { getByTestId } = render(<SignUp navigation={navigation} />);
    const page = render(<SignUp navigation={navigation}/>); 
  
    fireEvent.changeText(getByTestId("Signup.emailInput"), "invalidEmail");
    fireEvent.changeText(getByTestId("Signup.passwordInput"), "password");
    fireEvent.press(getByTestId("signupButton"));
  
    const signupButton = page.getByTestId('signupButton'); 
    fireEvent.press(signupButton); 

    expect(Alert.alert).toHaveBeenCalledWith("email-already-in-use")

  });

  it("handles invalid password input submission", async () => {
    // fetch.mockResponseOnce(JSON.stringify({ passes: true }));

    const navigation = {navigate: () => {}}
    // spyOn(navigation, 'navigate'); 
    jest.spyOn(navigation, 'navigate'); 
    jest.spyOn(Alert, 'alert');

    const { getByTestId } = render(<SignUp navigation={navigation} />);
    const page = render(<SignUp navigation={navigation}/>); 
  
    fireEvent.changeText(getByTestId("Signup.emailInput"), "email");
    fireEvent.changeText(getByTestId("Signup.passwordInput"), "invalidPassword");
    fireEvent.press(getByTestId("signupButton"));
  
    const signupButton = page.getByTestId('signupButton'); 
    fireEvent.press(signupButton); 

    expect(Alert.alert).toHaveBeenCalledWith("Password should be at least 6 characters")

  });


