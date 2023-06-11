// import { View, Text } from 'react-native'
// import React from 'react'

// const SessionUsers = () => {
//   return (
//     <View>
//       <Text>SessionUsers</Text>
//     </View>
//   )
// }

// export default SessionUsers

import React, { Component, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  FlatList,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 

import Friends from '../components/SessionUsers/Friends'; 
import Add from '../components/SessionUsers/Add'; 
import Random from '../components/SessionUsers/Random'; 

export default function SessionUsers() {

  const focusSession = createMaterialTopTabNavigator();

  return <focusSession.Navigator 
            screenOptions={{
              tabBarLabelStyle: { fontSize: 14 },
              tabBarLabelStyle: { color: '#f6f6f6'},
              tabBarStyle: { backgroundColor: '#007788', paddingTop: 50 }, 
              
            }}
          >

    <focusSession.Screen 
      name='Friends' 
      component={Friends} 
      /> 

    <focusSession.Screen 
      name='Random' 
      component={Random}
      />

    <focusSession.Screen 
      name='Add' 
      component={Add}
      />

  </focusSession.Navigator>
}