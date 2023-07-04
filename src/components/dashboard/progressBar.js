import React, { useState } from 'react';
import { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
// import { authentication, db } from '../../../config';
// import { doc, getDoc, get, where, Filter, getDocs, query, collection, setDoc} from "firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';





const ProgressBar = ({ navigation }) => {

    const goToLeaderboard = () => {
        Alert.alert('Leaderboard WIP')
        navigation.navigate('Leaderboard')
    }

    const [userXP, setUserXP] = useState(0);
    const [width, setWidth] = useState(0);

    // const userRef = doc(db, "users", authentication.currentUser.email);
    // useFocusEffect(
    //     useCallback(() => {
    //         getDoc(userRef)
    //             .then((doc) => {
    //                 console.log(doc.get('xp'))
    //                 setUserXP(doc.get('xp')) 
    //             }) 
                
            
    //      }, [])
    // )

    useEffect(() => {
        const percent = userXP / 1000 * 100;
            console.log('percent ' + percent)
            setWidth(percent + '%');

    }, [userXP])


    return (
        <SafeAreaView style={{
            //backgroundColor: 'pink',
            paddingHorizontal: 8,
            marginTop: -20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            top: 10,
            height: 60
        }}>
            

            <Text style={{
                position: 'absolute',
                //fontFamily: 'PressStart',
                fontSize: 16,
                //color: '#007788',
                //marginTop: -15,
                left: 9,
                top: 10,
            }}>Level 2</Text>

        
            
                <TouchableOpacity onPress={() => goToLeaderboard()} testID='leaderboardButton'>
                    <View style={styles.progress}>
                        <View style={{
                            display: 'flex',
                            height: 10,
                            backgroundColor: '#007788',
                            borderRadius: 20,
                            width: width,
                            //top: -15,
                           // position: 'absolute'
                           
                        }}></View>
                    </View>
                </TouchableOpacity>

                <View style={{
                width: 50,
                height: 50,
                //backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                top: -40,
                right: 50

            }}>
                <TouchableOpacity onPress={goToLeaderboard}>
                <Image source={require('../../../assets/star-icon.png')} 
                        style={{
                            width: 50,
                            height: 50,
                            top: 50
                           

                        }} />

                </TouchableOpacity>
                
            </View>

            
            

            
            
        </SafeAreaView>
    )

}

const styles=StyleSheet.create({
    progress: {
        height: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 20,
        //position: 'absolute',
        top: 0,
        width: 250
        
    },
})

export default ProgressBar;