import { StyleSheet, Text, View, Image, TouchableOpacity, AppState} from 'react-native'
import React from 'react'
import { Input, Button } from 'react-native-elements'
import { useState, useEffect} from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authentication } from '../../config';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config';

import {Picker} from "@react-native-picker/picker";

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [username, setUsername] = useState('');
    const [avater, setAvater] = useState('');
    const [name, setName] = useState(''); 
    const [gender, setGender] = useState(''); 
    const [major, setMajor] = useState(''); 
    const [year, setYear] = useState(''); 
    //online portion 
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = (nextAppState) => {
    console.log('App State: ' + nextAppState);
    if (appState != nextAppState) {
      if (appState.match(/inactive|background/) 
            && nextAppState === 'active') {
        console.log(
          'App State: ' +
          'App has come to the foreground!'
        );
        alert(
          'App State: ' +
          'App has come to the foreground!'
        );
      }
      alert('App State: ' + nextAppState);
      setAppState(nextAppState);
    }
  };


    const registerUser = async () => {
        createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredentials) => {
            const userUID = userCredentials.user.uid;
            const docRef = doc(db, 'users', userUID);
            const docSnap = setDoc(docRef, {
                avaterUrl: avater ? avater :'https://thumbs.dreamstime.com/b/businessman-avatar-line-icon-vector-illustration-design-79327237.jpg',
                name,
                gender, 
                major, 
                year, 
                email, 
                password,
                userUID,
                appState: appState, 
            })
           
        })
        .then(() => console.log('succesful'))
    }
  return (
    <View style={styles.container}>

        <Input
        placeholder='Avater url'
        label='Avater'
        value={avater}
        style={styles.input}
        onChangeText={text => setAvater(text)}
        leftIcon={{type:'material', name:'link', color: '#007788'}}
        />

        <Input
        placeholder='name'
        label='name'
        value={name}
        style={styles.input}
        onChangeText={text => setName(text)}
        leftIcon={{type:'material', name:'account-circle', color: '#007788'}}

        />
        
        {/* <Input
        placeholder='Enter your gender (F/M/NIL)'
        label='Gender'
        value={gender}
        style={styles.input}
        onChangeText={text => setGender(text)}
        leftIcon={{type:'material', name:'supervised-user-circle', color: '#007788'}}
        /> */}

    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
      <Text style={{
      position: 'relative',
      marginRight: 20, 
    }}>Select Your Gender:</Text>

    <Text style={{
      position: 'relative',
      left: 12,
    }}>Select Your Year:</Text>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
    <Picker style={{
          borderColor: '#777',
          backgroundColor: '#f6f6f6',
          height: 150, 
          width: 200, 
          marginBottom: 20, 
        }}
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) =>
            setGender(itemValue)
            }
            mode="dropdown"
            >
        <Picker.Item label="F" value="F" />
        <Picker.Item label="M" value="M" />
        <Picker.Item label="NIL" value="NIL" />
        </Picker>

        <Picker style={{
            borderColor: '#777',
            backgroundColor: '#f6f6f6',
            height: 150, 
            width: 200, 
            marginBottom: 20, 
        }}
            selectedValue={year}
            onValueChange={(itemValue, itemIndex) =>
            setYear(itemValue)
            }
            // mode="dropDown"
            >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6 and above" value="6 and above"/>
        </Picker>
         </View>

         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
         <Text style={{
          backgroundColor: '#f6f6f6',
          borderColor: '#777',
          padding: 8,
          margin: 10,
          width: 150,
          height: 40, 
          marginBottom: 20,
         }} > Gender: {gender} </Text>

          <Text style={{
          backgroundColor: '#f6f6f6',
          borderColor: '#777',
          padding: 8,
          margin: 10,
          width: 150,
          height: 40, 
          marginBottom: 20,
         }} > Year: {year} </Text>
        </View>

        <Input
        placeholder='Enter your major'
        label='Major'
        value={major}
        style={styles.input}
        onChangeText={text => setMajor(text)}
        leftIcon={{type:'material', name:'menu-book', color: '#007788'}}
        />

        {/* <Input
        placeholder='Enter your year'
        label='year'
        value={year}
        style={styles.input}
        onChangeText={text =>setYear(text)}
        leftIcon={{type:'material', name:'calendar-today', color: '#007788'}}
        /> */}

        <Input
        placeholder='Enter your email'
        label='Email'
        value={email}
        style={styles.input}
        onChangeText={text => setEmail(text)}
        leftIcon={{type:'material', name:'email', color: '#007788'}}
        />

        <Input
        placeholder='Enter your password'
        label='Password'
        value={password}
        style={styles.input}
        onChangeText={text => setPassword(text)}
        leftIcon={{type:'material', name:'lock',color: '#007788'}}
        secureTextEntry
        />
        
        <TouchableOpacity onPress={(registerUser)}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </View>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: '#eef1e1',
        alignItems: 'center'
    },
    button: {
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 15,
        backgroundColor: '#007788',
        //position: 'centre',
        //left: 108,
        flexDirection: 'column',
        justifyContent: 'center',
        width: 200,
        height: 50, 
        marginBottom: 10, 
      },
      buttonText: {
        color: '#f6f6f6',
        fontWeight: 'bold',
        fontFamily: 'RowdiesRegular', 
        fontSize: 18,
        textAlign: 'center',
      },
      input: {
        backgroundColor: '#f6f6f6',
        //borderWidth: 0.5,
        //borderColor: '#777',
        padding: 10,
        borderRadius: 10,
        margin: 5,
        //width: 300,
        //marginBottom: 20,
        marginHorizontal: 20,
        width: 320,
        // top: -20
    },
})