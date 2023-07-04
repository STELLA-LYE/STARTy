import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../../src/screens/onboardingScreen'; 
import Profile from '../../src/screens/profile';
import { fireEvent, render, spyOn} from '@testing-library/react-native'; 

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Upon setting up profile', () => {
    test('should navigate to OnboardingScreen page ', async () => {
      const component = (
        <NavigationContainer>
          <OnboardingScreen />
        </NavigationContainer>
      );

      const {getAllByTestId} = render(component);

      const onboardingScreen = getAllByTestId('onboardingScreen');
  
      expect(onboardingScreen).toBeTruthy();
    });
}); 

describe('Upon setting up profile', () => {

  it('should navigate to OnboardingScreen page', () => {
      const navigation = {navigate: () => {}}
      // spyOn(navigation, 'navigate'); 
      jest.spyOn(navigation, 'navigate'); 

      const page = render(<Profile navigation={navigation}/>); 

      const onboardingButton = page.getByTestId('onboardingButton'); 

      fireEvent.press(onboardingButton); 

      expect(navigation.navigate).toHaveBeenCalledWith("OnboardingScreen"); 

  })
}) 
