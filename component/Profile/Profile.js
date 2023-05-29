import { Text, TextInput, View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

import axios from 'axios';


const Profile = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        axios.get("https://test-server-l6fk.onrender.com/api/auth").then((res) => setData({
            ...data,
            ...res.data,
        })
        );
    }, [])

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

    // Récupération du nom d'utilisateur à partir du cookie
    const usernameFromCookie = getCookieValue("username");

    return <>
        <View name="profil-container" style={styles.profil}>
            <View name="UserName" style={styles.subView}>
                <Text name="username" style={{ textTransform: 'uppercase' }}>Nom d'utilisateur:</Text>
                <Text>{usernameFromCookie}</Text>
            </View>
            <View name="Nom" style={styles.subView}>
                <Text name="username" style={{ textTransform: 'uppercase' }}>Nom:</Text>
                <Text>{usernameFromCookie}</Text>
            </View>
            <View name="Prenom" style={styles.subView}>
                <Text name="username" style={{ textTransform: 'uppercase' }}>Prenom:</Text>
                <Text>{usernameFromCookie}</Text>
            </View>
            <View name="Téléphone" style={styles.subView}>
                <Text name="username" style={{ textTransform: 'uppercase' }}>Telephone:</Text>
                <Text>{usernameFromCookie}</Text>
            </View>
        </View>
    </>;
}

export default Profile;

const styles = StyleSheet.create({
    subView: {
        textAlign: 'center',
    },
    profil: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100%',
        borderWidth: 2,
    }

})