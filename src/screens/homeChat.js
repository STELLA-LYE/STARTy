import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
// import { collection, onSnapshot, where, query } from 'firebase/firestore'
// import { authentication, db } from '../../config'
import { ListItem } from '../components/chat/listItem'

export default function HomeChat({navigation}) {
  const [users, setUsers] = useState([]);

  const logoutUser = async () => {
    // authentication.signOut()
    // .then(() => {
      // navigation.replace('Login')
      navigation.navigate('Login')
    // })
  }
 
  // const getUsers =  () => {
  //   // const docsRef = collection(db, 'users');
  //   // const q =  query(docsRef, where('userUID', '!=', authentication?.currentUser?.uid ));
  //   const q = query(collection(db, 'focusSession', authentication.currentUser.email, 'partners'));
  //   const docsSnap = onSnapshot(q, (onSnap) => {
  //     let data = [];
  //     onSnap.docs.forEach(user => {
  //       data.push({...user.data()})
  //       setUsers(data)
  //       console.log(user.data())
        
  //     })
  //   })
  // }
  // useEffect(() => {
  //   getUsers();
  // },[])


  return (
    <View style={styles.container} testID='chatList'>
    <>
      <TouchableOpacity onPress={logoutUser} testID='logoutButton'>
          <View style={styles.button}>
              <Text style={styles.buttonText}>Logout</Text>
          </View>
      </TouchableOpacity>

      <FlatList
      data={users}
      key={user => user.email}
      renderItem={({item}) => 
        <ListItem testID='chatUser'     
        onPress={() => navigation.navigate('Chatroom', {name:item.name, uid:item.userID, userAvatar:item.photoURL})}     
        title={item.name}
        // subTitle={item.email}
        image={item.photoURL}
        />
      }
      />

  </>
  </View>
    
  )
}

// const styles = StyleSheet.create({
//   container:{
//       flex:1, 
//       backgroundColor: '#eef1e1',
//   },
//   button: {
//     borderRadius: 100,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     backgroundColor: '#007788',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     width: 100,
//     marginBottom: 10, 
//   },
//   buttonText: {
//     color: '#f6f6f6',
//     fontWeight: 'bold',
//     fontFamily: 'RowdiesRegular', 
//     fontSize: 14,
//     textAlign: 'center',
//   },
// })


const styles = StyleSheet.create({
  container:{
      flex:1, 
      backgroundColor: '#eef1e1',
  },
  button: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#007788',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 100,
    marginBottom: 10, 
    marginTop: 45,
    marginLeft: 20
  },
  buttonText: {
    color: '#f6f6f6',
    fontWeight: 'bold',
    fontFamily: 'RowdiesRegular', 
    fontSize: 14,
    textAlign: 'center',
  },
  empty: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center'
  }, 
  emptyText: {
    fontSize: 24,
    opacity: 0.5
  }
})