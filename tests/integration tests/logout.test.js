import React from 'react'; 
import HomeChat from '../../src/screens/homeChat'; 
import Home from '../../src/screens/home'; 
import { fireEvent, render, spyOn} from '@testing-library/react-native'; 

it("be able to logout", () => {
    const { getByTestId } = render(
      <HomeChat />
    );
    expect(getByTestId("logoutButton")).toBeTruthy(); //passes
  });

  it("be able to logout", () => {
    const { getByTestId } = render(
      <Home />
    );
    expect(getByTestId("logoutButton")).toBeTruthy(); //passes
  });

  describe('HomeChat screen', () => {

    it('should be able to log out', () => {
        const navigation = {navigate: () => {}}
        // spyOn(navigation, 'navigate'); 
        jest.spyOn(navigation, 'navigate'); 

        const page = render(<HomeChat navigation={navigation}/>); 

        const logoutButton = page.getByTestId('logoutButton'); 

        fireEvent.press(logoutButton); 

        expect(navigation.navigate).toHaveBeenCalledWith("Login"); 

    })
})

describe('Home screen', () => {

  it('should be able to log out', () => {
      const navigation = {navigate: () => {}}
      // spyOn(navigation, 'navigate'); 
      jest.spyOn(navigation, 'navigate'); 

      const page = render(<Home navigation={navigation}/>); 

      const logoutButton = page.getByTestId('logoutButton'); 

      fireEvent.press(logoutButton); 

      expect(navigation.navigate).toHaveBeenCalledWith("Login"); 

  })
})

