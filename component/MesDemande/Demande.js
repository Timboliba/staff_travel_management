import { React, useEffect, useState } from 'react';
import axios from 'axios';

import { View, Text, StyleSheet, Image } from 'react-native';

const Demande = ({ route, navigation }) => {

    const id = route.params;
    const url = `http://localhost:8080/api/${id.id}`;
    const Denied = () => {
        // fetch(url, {
        //     method: 'DELETE'
        // }).then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(e => console.error(e));

        axios.delete(url)
            .then(data => console.log(data))
            .catch(e => console.error(e));
        alert("Deplacement supprimé avec succes")
    }

    //fonction approved
    const Approved = () => {
        alert("Approved request")
    }
    //console.log(JSON.stringify(id.id));

    const [data, setData] = useState({});
    useEffect(() => {
        axios.get(url).then((res) => setData({
            ...data,
            ...res.data,
        })
        );
    }, [])

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#FFFFFF',
            }}
            onPress={() => {
                // Insérer ici la logique de redirection vers le lien spécifié
            }}
        >
            <Image
                source={require('../../assets/logo.png')}
                style={{
                    width: 50,
                    height: 50,
                    marginRight: 10,
                }}
            />
            <View>
                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{data.destination}</Text>
                <Text>{data.motif}</Text>
                <Text>{data.date_depart}</Text>
                <Text>{data.duree} jours</Text>
                <Text>{data.etat === "yes" ? "Deplacement aprouvé" : "En attente de confirmation"}</Text>
            </View>
            <View style={styles.container}>
                <Text style={[styles.text, styles.approvedButton]} onPress={Approved}>
                    Approved
                </Text>
                <Text style={[styles.text, styles.deniedButton]} onPress={Denied}>
                    Denied
                </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: '#FFFFFF',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    approvedButton: {
        backgroundColor: 'green',
        color: '#FFFFFF',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
    },
    deniedButton: {
        backgroundColor: 'red',
        color: '#FFFFFF',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 5,
    },
});

export default Demande;
