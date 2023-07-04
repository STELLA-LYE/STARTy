
import React from 'react'
import Profile from '../../src/screens/editProfile';
import ProfileCard from '../../src/components/dashboard/profileCard';
import { fireEvent, render, spyOn} from '@testing-library/react-native'; 

describe('Edit profile screen', () => {

    it('should go to main page', () => {
        const navigation = {navigate: () => {}}
        // spyOn(navigation, 'navigate'); 
        jest.spyOn(navigation, 'navigate'); 

        const page = render(<Profile navigation={navigation}/>); 

        const profileButton = page.getByTestId('profileButton'); 

        fireEvent.press(profileButton); 

        expect(navigation.navigate).toHaveBeenCalledWith("Main Tab"); 

    })
})

describe('profileCard screen', () => {

    it('should go to edit profile page', () => {
        const navigation = {navigate: () => {}}
        // spyOn(navigation, 'navigate'); 
        jest.spyOn(navigation, 'navigate'); 

        const page = render(<ProfileCard navigation={navigation}/>); 

        const editprofileButton = page.getByTestId('editProfileButton'); 

        fireEvent.press(editprofileButton); 

        expect(navigation.navigate).toHaveBeenCalledWith("Edit Profile"); 

    })
})