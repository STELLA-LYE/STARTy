import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import ProfileCard from '../../src/components/dashboard/profileCard'; 
import { fireEvent, render, spyOn} from '@testing-library/react-native'; 

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Dashboard page', () => {
    test('testing view and check profile information', async () => {
      const component = (
        <NavigationContainer>
          <ProfileCard />
        </NavigationContainer>
      );

      const {getAllByTestId} = render(component);

      const profileCard = getAllByTestId('profileCard');
  
      expect(profileCard).toBeTruthy();
    });
}); 