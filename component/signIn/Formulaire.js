import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../Logo/Logo';

import { TextInput, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';



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
    //Fonction de vérification des champs avant envoie des données
    const handleLogin = () => {
        if (username === "" || password === "") {
            console.log("Veuillez remplir le champ manquant");
            console.log(etatAuth);
        } else {
            let isAuthenticated = false;
            res.forEach((item) => {
                if (item.identifiant === username && item.password === password) {
                    isAuthenticated = true;
                    document.cookie = `id=${item._id}; path=/`;
                }
            });

            if (isAuthenticated) {

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

        {/*Formulaire en entante de d'approbation
        <View style={{ flex: 1, }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 40 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderRadius: 10, backgroundColor: 'silver', padding: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Text style={{ width: '50%', height: '100%', marginRight: 10, }}>
                                    <Image source={require('../../assets/logo.png')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                                </Text>
                                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Sign into your account</Text>
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <TextInput
                                    style={{ backgroundColor: 'white', fontSize: 18, paddingHorizontal: 10, paddingVertical: 8, borderBottomWidth: 1 }}
                                    placeholder="User name"
                                    onChange={SetUser}
                                    id="username"
                                />
                            </View>

                            <View style={{ marginBottom: 20 }}>
                                <TextInput
                                    style={{ backgroundColor: 'white', fontSize: 18, paddingHorizontal: 10, paddingVertical: 8, borderBottomWidth: 1 }}
                                    placeholder="Password"
                                    secureTextEntry
                                    onChange={SetPwd}
                                    id="pwd"
                                />
                            </View>

                            <TouchableOpacity style={{ marginBottom: 20 }}>
                                <View style={{ backgroundColor: 'black', borderRadius: 5, paddingVertical: 12 }} >
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }} onPress={handleLogin}>Login</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 12, color: 'gray', textDecorationLine: 'underline' }}>Terms of use.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, color: 'gray', textDecorationLine: 'underline' }}>Privacy policy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>*/}
    </>;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        justifyContent: 'center',

    },
    contentContainer: {
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        padding: 40,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        borderWidth: 1
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default Formulaire;