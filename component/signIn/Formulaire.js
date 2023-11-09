import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../Logo/Logo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';



const Formulaire = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [etatAuth, setEtatAuth] = useState(false);
    const [data, setData] = useState({});
    let isAuthenticated = false;



    useEffect(() => {
        axios.get(`https://test-server-l6fk.onrender.com/api/auth`).then((res) => setData({
            ...data,
            ...res.data,
        })
        );
    }, [])

    let res = Object.values(data);
    console.log(username)
    //Fonction de vérification des champs avant envoie des données
    const handleLogin = async () => {
        if (username === "" || password === "") {
            console.log("Veuillez remplir le champ manquant");
            console.log(etatAuth);
        } else {
            res.forEach(async (item) => {
                if (item.identifiant === username && item.password === password) {
                    isAuthenticated = true;
                    document.cookie = `id=${item._id}; path=/`;
                    await AsyncStorage.setItem('auth', isAuthenticated);
                    navigation.navigate('Home');
                }
            });

            if (isAuthenticated) {
                setEtatAuth(true);
                console.log("Authentification réussie");
                console.log(AsyncStorage.getItem('auth'));
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
        <View style={styles.container}>
            <Logo />
            <View style={styles.contentContainer}>
                <Text style={styles.label}>User name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={setUsername}
                />
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Text style={styles.button} onPress={handleLogin}>Login</Text>
            </View>
        </View>
    </>;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        justifyContent: 'center',

    },

    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#F3F3F3',
        //borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderWidth: 1,

    },

    button: {
        backgroundColor: 'blue',
        //borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default Formulaire;