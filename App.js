import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Home from './component/Home/Home';
import Formulaire from './component/signIn/Formulaire';
import { useState, useEffect } from 'react';

const stack = createNativeStackNavigator();

export default function App() {


  const [etatAuth, setEtatAuth] = useState(false);
  const dataSet = (data) => {
    setEtatAuth(data)
  }

  return <>
    {
      etatAuth ? <NavigationContainer>
        <stack.Navigator initialRouteName={Formulaire}>
          <stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

        </stack.Navigator>
      </NavigationContainer> : <Formulaire func={dataSet} />
    }

  </>;

}


const styles1 = StyleSheet.create({
  input: {
    width: 250,
    borderWidth: 2,
    borderRadius: 5,
    height: 30,
    marginBottom: 5,
    backgroundColor: "white"
  },
  texte: {
    fontSize: '15',
    fontWeight: 'bold',
    marginBottom: 5
  },
  button: {
    borderWidth: 2,
    borderColor: '#000000',
    fontSize: "22",
    borderRadius: 5,
    padding: 5,
    marginTop: 15,
    backgroundColor: "transparant"
  }
});