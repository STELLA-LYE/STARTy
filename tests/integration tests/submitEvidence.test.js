import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import Tasks from '../../src/screens/tasks';
import Home from '../../src/screens/home';
import Evidence from '../../src/components/tasks/evidence'; 
import { Alert } from 'react-native';
import { fireEvent, render, spyOn} from '@testing-library/react-native'; 

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('MainTab page', () => {
  test('testing navigation to Tasks page ', async () => {
    const component = (
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );

    const {getAllByTestId} = render(component);

    const home = getAllByTestId('home');

    expect(home).toBeTruthy();
  });
}); 

describe('MainTab page', () => {
    test('testing navigation to Tasks page ', async () => {
      const component = (
        <NavigationContainer>
          <Tasks />
        </NavigationContainer>
      );

      const {getAllByTestId} = render(component);

      const tasks = getAllByTestId('tasks');
  
      expect(tasks).toBeTruthy();
    });
}); 

describe('Home screen', () => {

  it('should go to tasks page', () => {
      const navigation = {navigate: () => {}}
      // spyOn(navigation, 'navigate'); 
      jest.spyOn(navigation, 'navigate'); 

      const page = render(<Home navigation={navigation}/>); 

      const tasksButton = page.getByTestId('tasksButton'); 

      fireEvent.press(tasksButton); 

      expect(navigation.navigate).toHaveBeenCalledWith("Task"); 

  })
})

it("be able to upload evidence", () => {
  const { getByTestId } = render(
    <Evidence />
  );
  expect(getByTestId("uploadButton")).toBeTruthy(); //passes
});

describe('Evidence screen', () => {

  it('should be able to show alert upon submission', () => {
      const navigation = {navigate: () => {}}
      
      jest.spyOn(Alert, 'alert');
      
      const page = render(<Evidence navigation={navigation}/>); 

      const finalizeButton = page.getByTestId('finalizeButton'); 

      fireEvent.press(finalizeButton); 

      expect(Alert.alert).toHaveBeenCalledWith("Sorry, you've missed the deadline for submission", "Don't give up! You can start fresh today by doing another focus session :)")

  }) 
})

describe('Evidence screen', () => {
 
  it('should be able to finalize evidence', () => {
      const navigation = {navigate: () => {}}
      // spyOn(navigation, 'navigate'); 
      jest.spyOn(navigation, 'navigate'); 

      const page = render(<Evidence navigation={navigation}/>); 

      const finalizeButton = page.getByTestId('finalizeButton'); 

      fireEvent.press(finalizeButton); 

      expect(navigation.navigate).toHaveBeenCalledWith("Main Tab"); 

  }) 
})



