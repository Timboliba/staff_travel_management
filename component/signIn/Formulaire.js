import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../Logo/Logo';

import { TextInput, View, Text, Image, StyleSheet } from 'react-native';



const Formulaire = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [etatAuth, setEtatAuth] = useState(false);
    const [data, setData] = useState({});

    props.func(etatAuth);

    useEffect(() => {
        axios.get("https://test-server-l6fk.onrender.com/api/auth").then((res) => setData({
            ...data,
            ...res.data,
        })
        );
    }, [])

    let res = Object.values(data);
    console.log(username)
    /* const handleLogin = () => {
         //alert(`Username: ${username}, Password: ${password}`);
         //var login = { "usesrname": "young", "password": "0000" }
         if (username == "" || password == "") {
             console.log("Veullez remplir le champ manquant");
             console.log(etatAuth);
         } else if (username != res[1].identifiant || password != res[1].password) {
             console.log("Nom d'utilisateur ou mot de passe incorrect!");
             console.log(res[1].identifiant + " " + username.toString())
             console.log(res[1].password + " " + password.toString())
             console.log(etatAuth);
         } else {
             setEtatAuth(true);
             console.log(res[1].identifiant)
             console.log(res[1].password)
             console.log(res[1].identifiant + " " + res[1].password);
             console.log(etatAuth);
         }
 
     }*/
    const handleLogin = () => {
        if (username === "" || password === "") {
            console.log("Veuillez remplir le champ manquant");
            console.log(etatAuth);
        } else {
            let isAuthenticated = false;
            res.forEach((item) => {
                if (item.identifiant === username && item.password === password) {
                    isAuthenticated = true;
                }
            });

            if (isAuthenticated) {
                document.cookie = `username=${username}; path=/`;
                setEtatAuth(true);
                console.log("Authentification réussie");
                console.log(etatAuth);
            } else {
                console.log("Nom d'utilisateur ou mot de passe incorrect !");
                console.log(etatAuth);
            }
        }
    }

    const SetUser = (e) => {
        setUsername(e.target.value);
    }
    const SetPwd = (e) => {
        setPassword(e.target.value);
    }



    return <>
        <View style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Logo />
            <View style={{ backgroundColor: 'transparent', width: '100%', alignItems: "center", height: '60%', paddingTop: '10%' }}>
                <Text style={styles1.texte}>User name:</Text>
                <TextInput style={styles1.input} placeholder="Saisir vôtre identifiant" onChange={SetUser} id="username" />
                <Text style={styles1.texte}>Password:</Text>
                <TextInput style={styles1.input} placeholder="Saisir vôtre identifiant" onChange={SetPwd} secureTextEntry={true} id="pwd" />
                <Text style={styles1.button} onPress={handleLogin}>Connexion</Text>
            </View>
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

export default Formulaire;