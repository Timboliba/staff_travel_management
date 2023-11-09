import { Text, Button, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';

import axios from 'axios';


const Profile = () => {
    // Fonction pour récupérer la valeur d'un cookie par son nom
    const getCookieValue = (name) => {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split("=");
            if (cookie[0] === name) {
                return cookie[1];
            }
        }
        return "";
    };

    const logOut = async () => {
        await AsyncStorage.removeItem('auth');
        navigation.navigate('Formulaire');
    }
    // Récupération du nom d'utilisateur à partir du cookie

    const usernameFromCookie = getCookieValue("id");
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://test-server-l6fk.onrender.com/api/auth/${usernameFromCookie}`).then((res) => setData({
            ...data,
            ...res.data,
        })
        );
    }, [])

    return <>
        <View style={styles.container}>
            <View style={styles.col}>
                <Image
                    source={require('../../assets/avatar.jpg')}
                    style={styles.image}
                />
            </View>
            <View style={styles.row}>
                <View style={[styles.col, styles.details]}>
                    <Text style={styles.name}>NOM : {data.nom} </Text>
                    <Text style={styles.name}>PRENOM : {data.prenom} </Text>
                    <Text style={styles.name}>USERNAME : {data.identifiant} </Text>
                    <Text>
                        <Text style={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg></Text>Phone: {data.phone}
                    </Text>
                    <Button title='Log Out' onPress={logOut} />



                </View>
            </View>
        </View>
    </>;
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 16,
        margin: 16,
        height: '90%'
    },
    col: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    details: {
        marginLeft: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    icon: {
        fontSize: 20,
        marginRight: 4,
    },
});
