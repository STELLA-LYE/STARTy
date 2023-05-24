import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './SignUp';
 

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp/>
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
});

