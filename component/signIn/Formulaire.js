import React, { useState } from 'react';
import Logo from '../Logo/Logo';

import { TextInput, View, Text, Image, StyleSheet } from 'react-native';



const Formulaire = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        //alert(`Username: ${username}, Password: ${password}`);
        var login = { "usesrname": "young", "password": "0000" }
        if (username == "") {
            alert("Veullez remplir le champ nom d'utilisateur");
        } else {
            if (username != login["usesrname"]) {
                alert("Nom d'utilisateur incorrect!");
            } else {
                if (password == "") {
                    alert("Veullez remplir le champ mot de passe!");
                } else {
                    if (password != login["password"]) {
                        alert("Mot de passe incorrect!");
                    }
                }
            }

        }

    }

    return <>
        <Logo />
        <View style={{ backgroundColor: 'teal', width: '100%', alignItems: "center", height: '60%', paddingTop: '10%' }}>
            <Text style={styles1.texte}>User name:</Text>
            <TextInput style={styles1.input} placeholder="Saisir vôtre identifiant" onChangeText={setUsername} id="username" />
            <Text style={styles1.texte}>Password:</Text>
            <TextInput style={styles1.input} placeholder="Saisir vôtre identifiant" secureTextEntry={true} onChangeText={setPassword} id="pwd" />
            <Text style={styles1.button} onPress={handleLogin}>Connexion</Text>
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
        borderWidth: 2,
        borderColor: '#000000',
        fontSize: "22",
        borderRadius: 5,
        padding: 5,
        marginTop: 15,
        backgroundColor: "#1a53ff"
    }
});

export default Formulaire;