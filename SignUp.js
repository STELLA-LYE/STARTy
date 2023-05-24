import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import FlatButton from './Button';
import { Avatar } from "react-native-elements";
import * as Font from 'expo-font'; 
import { useFonts } from 'expo-font';
import RNPickerSelect from "react-native-picker-select";

export default function SignUp() {
  const [name, setName] = useState('shaun'); 
  const [gender, setGender] = useState('Female'); 
  const [major, setMajor] = useState('Science'); 
  const [year, setYear] = useState('2'); 

  const[fontsLoaded] = useFonts({
    RowdiesRegular: require('./assets/fonts/Rowdies-Regular.ttf')
  }); 
  
  return (

    <View style={styles.container}>
      
      <View style={styles.logo}>
      <Avatar
      size="medium"
      rounded
      title="User"
      onPress={() => console.log("Works!")}
      activeOpacity={0.2}/>
      </View>

      <Text>Enter Name:</Text>
      <TextInput 
        placeholder='e.g. John Doe' 
        value={name}
        style={styles.input}
        onChangeText={(value) => setName(value)} />

      <Text>Enter Gender:</Text>
      {/* <TextInput 
        placeholder='e.g. F/M/NIL' 
        value={gender}
        style={styles.input}
        onChangeText={(value) => setGender(value)} /> */}

      <RNPickerSelect
       useNativeAndroidPickerStyle={false}
       placeholder={{ label: "Select your gender", value: null}}
                 onValueChange={(value) => setGender(value)}
                 items={[
                     { label: "F", value: "F" },
                     { label: "M", value: "M" },
                     { label: "NIL", value: "NIL" },
                 ]}
                 style={pickerSelectStyles}
             />

      <Text>Enter Major:</Text>
      <TextInput 
        placeholder='e.g. Science (no short form)' 
        value={major}
        style={styles.input}
        onChangeText={(value) => setMajor(value)} />

      <Text>Enter Year:</Text>
      <RNPickerSelect
       useNativeAndroidPickerStyle={false}
       placeholder={{ label: "Select your year of study", value: null}}
                 onValueChange={(value) => setYear(value)}
                 items={[
                     { label: "1", value: "1" },
                     { label: "2", value: "2" },
                     { label: "3", value: "3" },
                     { label: "4", value: "4" },
                     { label: "5", value: "5" },
                     { label: "6 and above", value: "6 and above" },
                 ]}
                 style={pickerSelectStyles}
             />


      <Text style={styles.result}>name: {name}, gender: {gender}, major: {major}, year: {year}</Text>

      <FlatButton text='Sign Up' />
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef1e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
    marginBottom: 20,
  }, 
  logo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#007788', 
    alignItems: 'center',
    marginBottom: 20,
  }, 

});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    //fontSize: 14,
    padding: 8,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    backgroundColor: '#f6f6f6',
    paddingRight: 10,
    marginBottom: 20,
    margin: 10,
  },
  inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
  }
});


