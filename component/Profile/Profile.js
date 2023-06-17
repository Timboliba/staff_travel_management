import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
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

    // Récupération du nom d'utilisateur à partir du cookie

    const usernameFromCookie = getCookieValue("id");
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/api/auth/${usernameFromCookie}`).then((res) => setData({
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
                        <Text style={styles.icon}>🎂</Text>Phone: {data.phone}
                    </Text>

                </View>
            </View>
        </View>
    </>;
}

export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "red"
    },
    row: {
        flexDirection: 'row',
    },
    well: {
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    image: {
        width: 100,
        height: 130,
        resizeMode: 'cover',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    location: {
        fontSize: 12,
        marginBottom: 5,
    },
    icon: {
        marginRight: 5,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    btnGroup: {
        flexDirection: 'row',
        marginTop: 10,
    },
    btnPrimary: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 5,
        borderRadius: 3,
        marginRight: 5,
    },
    dropdownMenu: {
        backgroundColor: 'white',
        marginTop: 5,
        padding: 5,
    },
    dropdownMenuItem: {
        padding: 5,
    },
    dropdownMenuDivider: {
        height: 1,
        backgroundColor: 'gray',
        marginVertical: 5,
    },
});