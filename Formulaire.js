import React, { useState } from 'react';

import {TextInput,View,Text,Button,StyleSheet} from 'react-native';



const Formulaire=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    alert(`Username: ${username}, Password: ${password}`);
}

    return<>
        <View>
            <Text style={{textAlign:"center",fontSize:15,fontWeight:'bold',marginBottom:7}}>Login Form</Text>
            <Text style={styles1.texte}>User name:</Text>
            <TextInput style={styles1.input} placeholder="Saisir vôtre identifiant" require  onChangeText={setUsername}/>
            <Text style={styles1.texte}>Password:</Text>
            <TextInput style={styles1.input} placeholder="Saisir vôtre identifiant" required secureTextEntry={true}  onChangeText={setPassword}/>
            <Button  title="Connexion" style={styles1.texte,styles1.button} onPress={handleLogin}/>
        </View>
    </>;
}

const styles1=StyleSheet.create({
    input:{
       width:250,
       borderWidth: 2,
       borderRadius:5,
       height:30,
       marginBottom:15
      },
      texte:{
       fontSize:15,
       fontWeight:'bold',
       marginBottom:5
      },
      button:{
        borderWidth: 1,
        borderColor: '#000000',
      }
});

export default Formulaire;