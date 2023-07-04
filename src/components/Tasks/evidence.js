import { MaterialIcons } from '@expo/vector-icons'; 
import {React, useState, useEffect, useCallback} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator} from 'react-native';
import { Octicons } from '@expo/vector-icons'; 

// import { authentication } from '../../../config';
// import { doc, setDoc, addDoc, collection, getDoc} from "firebase/firestore"; 
// import { db } from '../../../config';
import { saveUserEvidence } from '../../services/user';

import * as ImagePicker from 'expo-image-picker';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';


const Evidence = ({route, navigation}) => {

    // const { otherUserID, otherUser } = route.params;

    // const currentUser = authentication.currentUser.uid
    const [taskName, setTaskName] = useState('');
    const [startDate, setStartDate] = useState(0);
    // const { otherUserEmail } = route.params;
    // console.log(otherUserEmail);
    const [evidenceUploaded, setEvidenceUploaded] = useState(true);

  const [currentDate, setCurrentDate] = useState('');
  const [evicheck, setEvicheck] = useState(false); 
  const [currentTime, setCurrentTime] = useState('');

 

  // // everytime user opens the evidence page, it will store the user start date
  // useEffect(() => {
  //   const docRef = doc(db, "focusSession", authentication.currentUser.email, "partners", otherUserEmail);
      
  //   getDoc(docRef)
  //     .then((doc) => {
  //         const s = doc.get('start')
  //         console.log('startreal: ' + doc.get('start'))
  //         setStartDate(s)
  //         console.log('start1: ' + startDate)
        
  //       }) 
  // }, []);



  const uploadEvidence = async () => {
        // let result = await ImagePicker.launchImageLibraryAsync({
        //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
        //   allowsEditing: true,
        //   aspect: [4, 3],
        //   quality: 1
        // })

        // if (!result.canceled) {
        //   setEvidenceUploaded(false);
        //   saveUserEvidence(result.assets[0].uri, otherUserID, taskName)
        //   .then((date) => setEvidenceUploaded(true))
        // }
  }

  const finalize = async () => {

    //  //get current date when user is uploading
    //   const currentDate = new Date().getDate();
    //   const expectedSubmissionDate = startDate + 1;
    //   console.log('Expected: ' + expectedSubmissionDate)
    //   console.log(currentDate);

    //   const usersRef = doc(db, "users", authentication.currentUser.email);
    //   await setDoc(usersRef, {
    //     matched: false,
    //   }, { merge: true})

    //   if (currentDate <= expectedSubmissionDate) {

    //     const currUserRef = doc(db, "users", authentication.currentUser.email);
        
    //     getDoc(currUserRef)
    //     .then((doc) => {
    //       const prevXP = doc.get('xp');
    //       const newXP = prevXP + 100;
    //       setDoc(currUserRef, {
    //         xp: newXP
    //       }, {merge: true})
    //     })

      //   Alert.alert("Another successful day!", 
      //   "Wait patiently for your XP as your partner verifies your evidence, in the meantime, feel free to start another focus session!",
      //   [{
      //       text: 'OK',
      //       onPress: () => {
      //           console.log('ok pres')
      //           navigation.navigate('Main Tab')
      //       }
      //   }] )
      // } else if (currentDate > expectedSubmissionDate) {
        console.log(currentDate);
        navigation.navigate('Main Tab')
        Alert.alert("Sorry, you've missed the deadline for submission", "Don't give up! You can start fresh today by doing another focus session :)")
        
      // }
  }


  return (
    <View style={{flex: 1, backgroundColor: '#eef1e1', alignItems: 'center', justifyContent: 'center', marginTop: -200}}>
  
      
      

      <View style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 100
      }}>
        <Image source={require('../../../assets/star-icon.png')} style={styles.image} />
        <Text
            style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#007788',
            }}>
            {'Due 23:59'}
        </Text>

      </View>

      <View style={{
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'white'
      }}>

      <Text style={{fontSize: 20}}>Enter name of task:</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(value) => setTaskName(value)} />
      <TouchableOpacity onPress={uploadEvidence} testID='uploadButton'>



        <Text style={{
            fontSize: 20
        }}>Click to Upload Your Evidence!</Text>

        {evidenceUploaded
            ? <MaterialIcons name="send-to-mobile" size={150} color="#007788" marginLeft={55} marginTop={10}/> 
            : 
            <View style={{
                marginTop: 40,
                justifyContent: 'center',
            }}>
                <ActivityIndicator color='#007788'/>   
            </View>
            }

      </TouchableOpacity>

      </View>
      

     
      

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 60,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '40%',
            height: 50,
            backgroundColor: evicheck ? 'gray': '#007788',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 50,
            borderRadius: 10,
          }}
          onPress={finalize} testID='finalizeButton'>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Finalize</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Evidence;

const styles = StyleSheet.create({
image: {
  width: 150,
  height: 150,
  position: 'absolute',
  top: -150
},
input: {
    backgroundColor: '#f6f6f6',
    //borderWidth: 0.5,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
    marginBottom: 20,
    //borderRadius: 8
  },
}); 