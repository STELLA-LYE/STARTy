import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../../src/screens/dashboard'; 
import Requests from '../../src/components/dashboard/requests';
import { fireEvent, render, spyOn} from '@testing-library/react-native'; 

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('MainTab page', () => {
    test('testing navigation to Dashboard page ', async () => {
      const component = (
        <NavigationContainer>
          <Dashboard />
        </NavigationContainer>
      );

      const {getAllByTestId} = render(component);

      const dashboard = getAllByTestId('dashboard');
  
      expect(dashboard).toBeTruthy();
    });
}); 

describe('Dashboard page', () => {
  test('testing user request list ', async () => {
    const component = (
      <NavigationContainer>
        <Requests />
      </NavigationContainer>
    );

    const {getAllByTestId} = render(component);

    const request = getAllByTestId('request');

    expect(request).toBeTruthy();
  });
}); 

it("be able to upload evidence", () => {
  const { getByTestId } = render(
    <Requests />
  );
  expect(getByTestId("requestButton")).toBeTruthy(); //passes
});