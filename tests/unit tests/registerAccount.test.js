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
  
  it("handles valid input submission", async () => {
    // fetch.mockResponseOnce(JSON.stringify({ passes: true }));

    const navigation = {navigate: () => {}}
    // spyOn(navigation, 'navigate'); 
    jest.spyOn(navigation, 'navigate'); 

    const { getByTestId } = render(<SignUp navigation={navigation} />);
    const page = render(<SignUp navigation={navigation}/>); 
  
    fireEvent.changeText(getByTestId("Signup.emailInput"), "email");
    fireEvent.changeText(getByTestId("Signup.passwordInput"), "password");
    fireEvent.press(getByTestId("signupButton"));
  
    const signupButton = page.getByTestId('signupButton'); 
    fireEvent.press(signupButton); 

    expect(navigation.navigate).toHaveBeenCalledWith("Profile"); 

  });

  describe('SignUp screen', () => {

    it('should handle navigation to login page', () => {
        const navigation = {navigate: () => {}}
        // spyOn(navigation, 'navigate'); 
        jest.spyOn(navigation, 'navigate'); 

        const page = render(<SignUp navigation={navigation}/>); 

        const loginButton = page.getByTestId('loginButton'); 

        fireEvent.press(loginButton); 

        expect(navigation.navigate).toHaveBeenCalledWith("Login"); 

    })
})

// describe('Evidence screen', () => {

//   it('should be able to show alert upon submission', () => {
//       const navigation = {navigate: () => {}}
      
//       jest.spyOn(Alert, 'alert');
      
//       const page = render(<SignUp navigation={navigation}/>); 

//       fireEvent.changeText(getByTestId("Signup.emailInput"), "invalidEmail");
//       fireEvent.changeText(getByTestId("Signup.passwordInput"), "password");
//       fireEvent.press(getByTestId("signupButton"));

//       const finalizeButton = page.getByTestId('signupButton'); 

//       fireEvent.press(finalizeButton); 

//       expect(Alert.alert).toHaveBeenCalledWith("email-already-in-use")

//   }) 
// })