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
        <View style={styles.container}>
            <View style={styles.field}>
                <Text style={styles.label}>Nom d'utilisateur:</Text>
                <Text style={styles.value}>{usernameFromCookie}</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Nom:</Text>
                <Text style={styles.value}>{usernameFromCookie.nom}</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Prénom:</Text>
                <Text style={styles.value}>{usernameFromCookie.prenom}</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Téléphone:</Text>
                <Text style={styles.value}>{usernameFromCookie.phone}</Text>
            </View>
        </View>
    </>;
}

export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
    },
    field: {
        marginBottom: 10,
    },
    label: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    value: {
        marginTop: 5,
    },
});