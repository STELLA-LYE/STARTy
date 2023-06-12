import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Bubble, Send} from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addDoc, collection, serverTimestamp , doc, onSnapshot, query, orderBy} from 'firebase/firestore';
import { db, authentication} from '../../config';
// import { color } from 'react-native-reanimated';

export default function Chat({route, navigation}) {
  const uid = route.params.uid
  const userAvatar = route.params.userAvatar
  const [messages, setMessages] = useState([]);
  const currentUser = authentication?.currentUser?.uid;

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any', https://bootdey.com/img/Content/avatar/avatar1.png
  //       },
  //     },
  //   ])
  // }, [])

  useEffect(() => {
    const chatId = uid > currentUser ? `${uid + '-' + currentUser}` : `${currentUser + '-' + uid}`;
    const docref = doc(db, 'chatrooms', chatId);
    const colRef = collection(docref, 'messages');
    const q = query(colRef, orderBy('createdAt',"desc"));
    const unsubcribe = onSnapshot(q, (onSnap) => {
      const allMsg = onSnap.docs.map(mes => {
        if(mes.data().createdAt){
          return{
            ...mes.data(),
            createdAt:mes.data().createdAt.toDate()
          }
        }else{
          return{
            ...mes.data(),
            createdAt:new Date()
          }
        }
        

      })
      setMessages(allMsg)

    })

      return () => {
        unsubcribe()
      }
  },[])

  const onSend = useCallback((messagesArray) => {
    const msg = messagesArray[0];
    // console.log(myMsg)
    const myMsg = {
      ...msg,
      sentBy:currentUser,
      sentTo:uid
//chatrooms/1233438485/messages/123/msg, createdat
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg))
    const chatId = uid > currentUser ? `${uid + '-' + currentUser}` : `${currentUser + '-' + uid}`;


    const docref = doc(db, 'chatrooms', chatId);
    const colRef = collection(docref, 'messages');
    const chatSnap = addDoc(colRef, {
      ...myMsg,
      createdAt:serverTimestamp(),
    })

  }, [])

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#007788"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#007788',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };


  return (
    <View style={styles.container}>

      {/* <Button style={styles.button}
        onPress={() => navigation.navigate('MainTabs')}
        title='back'
        /> */}

      <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>back</Text>
            </View>
        </TouchableOpacity>


    <GiftedChat
      messages={messages}
      onSend={text => onSend(text)}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      user={{
        _id: currentUser,
        avatar: userAvatar, 
      }}
      renderSend={renderSend}
      renderBubble={renderBubble}
      alwaysShowSend
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
      flex:1, 
      backgroundColor: '#eef1e1', 
      marginBottom: 20, 
  },
  button: {
    borderRadius: 100,
    backgroundColor: '#5372F0',
    //position: 'centre',
    //left: 108,
    justifyContent: 'center',
    width: 80,
    height: 40, 
    marginBottom: 10, 
    marginLeft: 175, 
  },
  buttonText: {
    color: '#f6f6f6',
    fontWeight: 'bold',
    // fontFamily: 'RowdiesRegular', 
    fontSize: 18,
    textAlign: 'center',
  },
})