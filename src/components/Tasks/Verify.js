import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const Verify = () => {

  const handleEditPress = () => {

  }

  return (
    <ScrollView style={styles.container}>

        <View style={styles.headerContainer}>
                <Text style={styles.tittleText}>Task 4</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.taskText}>
                Verify if your accountability partner has completed all his/her goals for the FocusSession.
                Please click on the corresponding button below!
            </Text>
        </View>

        <View style={styles.section}>
            <TouchableOpacity style={styles.yesbutton} onPress={handleEditPress}>
                <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.nobutton} onPress={handleEditPress}>
                <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
        </View>

    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#eef1e1',
  },
  headerContainer: {
    alignItems: 'center',
  },
  tittleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  taskText: {
    fontSize: 16,
    textAlign:'center',
    //color:'#A9A9A9', 
    color: 'black'
  },
  section: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    marginVertical:5,
    paddingHorizontal:30,
    marginTop: 30, 
  },
  yesbutton: {
    backgroundColor: '#007788',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 20,
    width: 250, 
  },
  nobutton: {
    backgroundColor: '#D2686E',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 20,
    width: 250, 
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
};

export default Verify;