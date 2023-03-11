import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput} from 'react-native';
import Formulaire  from './Formulaire';

export default function App() {
  return <>
    <View style={styles.container}>
      <Formulaire/>
    </View>
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

 
});
