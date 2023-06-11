import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from './src/components/context/Authcontext';
import Login from './src/screens/Login'; 
import Register from './src/screens/Register'; 
import Home from './src/screens/Home'; 
import Chat from './src/screens/Chat'; 
import Welcome from './src/screens/Welcome'; 
import MainTabs from './src/navigation/MainTab';


const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
      <NavigationContainer>
        <Stack.Navigator>
{/*           
               <Stack.Screen
                 name='Welcome'
                 component={Welcome}
                 /> */}
               <Stack.Screen
                 name='Login'
                 component={Login}
                 />
                 <Stack.Screen
                 name='Register'
                 component={Register}
                 />
                 <Stack.Screen
                 name='MainTabs'
                 component={MainTabs}
                 />
                  <Stack.Screen
               name='Home'
               component={Home}
               options={{
                headerBackVisible:false, 
                title:'Active users',
                headerTitleAlign:'center',
                headerTitleStyle:{fontWeight:'900'}
              }}
               />
               <Stack.Screen
               name='Chat'
               component={Chat}
               options={({route}) => ({
                headerBackVisible:false,
                title:route.params.name,
                headerTitleStyle:{fontWeight:'bold'},
                headerTitleAlign:'center'


               })}
               />

        </Stack.Navigator>
                
      </NavigationContainer>
    // </AuthContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
