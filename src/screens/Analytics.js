// import { View, Text } from 'react-native'
// import React from 'react'

// const Analytics = () => {
//   return (
//     <View>
//       <Text>Analytics</Text>
//     </View>
//   )
// }

// export default Analytics

import React from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, useState} from 'react-native'

const items = [
  {
    id: 1,
    name: 'Task 1',
    task: 'Set you goals for the day!',
    Due: 'Note down your goals and send it to your accountability partner'
  },
  {
    id: 2,
    name: 'Task 2',
    task: 'Send the evidences!',
    Due: 'Send evidences of completion of you goals to your accountability partner via the chat feature.Note: send the evidences in the form of google drive links'
  },
  {
    id: 3, 
    name: 'Task 3',
    task: 'Encouragement message!',
    Due: '(optional)leave an encouragement message for you accountability partner via the chat feature'
  },
  {
    id: 4,
    name: 'Task 4',
    task: 'Verification!',
    Due: 'verify the evidence sent by your accountability partner'
  },
]


const Analytics = ({navigation}) => {

  // const [count, setCount] = useState(0);

  function doTasks(item) {
    if (item.id == 1) {
      // return setCount(count + 1); 
    } else if (item.id == 2) {
      // return setCount(count + 1); 
    } else if (item.id == 3) {
      // return setCount(count + 1); 
    } else {
      return ()=> navigation.navigate('Verify'); 
    }
  }


  return (
    <View style={styles.container}>

      <Text style={styles.title}>FocusSession Guidelines</Text>
      
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.item}>
              
              <View style={styles.itemContent}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemTask}>{item.task}</Text>
                <Text style={styles.itemDue}>{item.Due}</Text>
              </View>
            </View>

            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button} onPress={doTasks(item)}>
                <Text style={styles.buttonText}> check </Text>
              </TouchableOpacity>

            </View>

          </View>
        )}
        keyExtractor={item => item.id}
      />

    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef1e1', 
  },
  card: {
    marginHorizontal:20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
    marginTop: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007788',  
    // backgroundColor: '#007788', 
    // color: '#fff', 
    // alignItems: 'center'
  },
  itemTask: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10, 
  },
  title: {
    fontSize: 20,
    color: '#007788',
    fontWeight: 'bold',
    alignSelf: 'center', 
    marginBottom: 10, 
  },
  itemDue: {
    fontSize: 16,
    color: '#999',
    marginBottom: 10, 
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#007788',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Analytics
