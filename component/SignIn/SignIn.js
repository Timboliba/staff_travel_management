import React, { useState } from 'react';
import Logo from './component/Logo/Logo';

import { TextInput, View, Text, Button, Image, StyleSheet } from 'react-native';
//import { MongoClient } from 'mongodb-stitch-react-native-sdk';



export default function SignIn() {
    /*  const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
  
      const handleLogin = () => {
          alert(`Username: ${username}, Password: ${password}`);
      }
  
      const LoginScreen = () => {
          const [username, setUsername] = useState('');
          const [password, setPassword] = useState('');
  
          const handleLogin = async () => {
              const client = MongoClient("mongodb+srv://<username>:<password>@cluster0.mongodb.net/ PROJECT?retryWrites=true&w=majority");
              await client.auth.loginWithCredential(new UserPasswordCredential(username, password));
  
          }
      };
  */

    return <>
        <Logo />
        <View style={{ backgroundColor: 'teal', width: '100%', alignItems: "center", height: '60%', paddingTop: '10%' }}>
            <Text style={styles1.texte}>User name:</Text>
            <TextInput style={styles1.input} placeholder="Saisir vôtre identifiant" />
            <Text style={styles1.texte}>Password:</Text>
            <TextInput style={styles1.input} placeholder="Saisir vôtre identifiant" secureTextEntry={true} />
            <Button title="Connexion" style={{ textDecorationColor: "black", color: "white" }} />
        </View>
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
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    button: {
        borderWidth: 1,
        borderColor: '#000000',
    }
});



//pour afficher le form connection
/*export default function App() {
    return <>
      <Logo />
      <Formulaire />
    </>
  }*/