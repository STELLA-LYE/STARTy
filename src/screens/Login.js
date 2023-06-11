import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Input, Button } from 'react-native-elements'
import { useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../../config';
import { useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../components/context/Authcontext';

export default function Login({navigation}) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then(()=> console.log('user logged in'))
    }
    useEffect(() => {
        onAuthStateChanged(authentication, (user) => {
            if(user){
                navigation.navigate('MainTabs')
            }else{
                // console.log('no user')
                navigation.canGoBack() && navigation.popToTop();

            }
        })
    },[])
  return (
    <View style={styles.container}>

         <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                    // source={require('../assets/star-icon.png')} 
                    source={require('../../assets/star-icon.png')} 
                    style={{width: 150, height: 150,}} />
                <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 40}}>Welcome!</Text>

                </View>

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
        leftIcon={{type:'material', name:'lock', color: '#007788'}}
        secureTextEntry
        />

            <TouchableOpacity  onPress={loginUser}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
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
    // btn:{
    //     marginHorizontal:10,
    //     marginBottom:40
    // }
    input: {
        backgroundColor: '#f6f6f6',
        //borderWidth: 0.5,
        //borderColor: '#777',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        //width: 300,
        //marginBottom: 20,
        marginHorizontal: 20,
        width: 320,
        // top: -20
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
        marginTop: 30,
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
})