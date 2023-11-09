import { React, useEffect, useState } from 'react';
import axios from 'axios';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Demande = ({ route, navigation }) => {

    const {id} = route.params;
    alert(id)
    const url = `http://localhost:8080/api/:${id.id}`;
    const Denied = () => {
        // fetch(url, {
        //     method: 'DELETE'
        // }).then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(e => console.error(e));

        axios.delete(url)
            .then(data => console.log(data))
            .catch(e => console.error(e));
        alert("Deplacement supprimé avec succes");

        //La redirection vers la listes des démandes
        navigation.navigate('Acceuil');
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

    return <>
        <View style={styles.container}>
            <View style={styles.shop}>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <View style={styles.block}>

                            <View style={styles.blockBody}>
                                <Text style={styles.heading}>
                                    <View>
                                        <Text style={styles.headingText}>Destination : {data.destination}</Text>
                                        <Text style={styles.headingText}>Date de départ : {data.date_depart}</Text>
                                        <Text style={styles.headingText}>Durée : {data.duree} jours</Text>
                                    </View>
                                </Text>
                                <View style={styles.headingText}>
                                    Motif du déplacement : {data.motif}
                                </View>
                                <View style={styles.blockImage}>
                                    {data.etat === "no" ? (
                                        <Text style={{ color: "red" }}>
                                            Etat : {data.etat === 'yes' ? 'Déplacement approuvé' : 'En attente de confirmation'}
                                        </Text>
                                    ) : (
                                        <Text style={{ color: "green" }}>
                                            Etat : {data.etat === 'yes' ? 'Déplacement approuvé' : 'En attente de confirmation'}
                                        </Text>
                                    )}
                                </View>
                                <View style={styles.productButtons}>
                                    <View style={styles.rowAlign}>
                                        <View style={styles.col8}>
                                            <TouchableOpacity
                                                style={data.etat === "yes" ? styles.btnDisabled : styles.btnPrimary}
                                                onPress={data.etat === "yes" ? null : Denied}
                                                disabled={data.etat === "yes"}
                                            >
                                                Denied
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Segoe UI'

    },

    btnDisabled: {
        backgroundColor: '#CCCCCC',
        opacity: 0.5,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shop: {
        backgroundColor: '#fff',
        borderRadius: 4,
        shadowColor: '#22233A',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        margin: 10,
    },
    blockImage: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 450,
        resizeMode: 'cover',
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flex: 1,
    },
    block: {
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 4,
        marginBottom: 15,
    },
    blockImage: {
        position: 'relative',
    },

    ribbon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#3498db',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 2,
    },
    ribbonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    blockBody: {
        padding: 15,
    },
    heading: {
        marginBottom: 10,
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#333',
    },
    description: {
        marginBottom: 10,
        color: '#666',
    },
    productColors: {
        marginTop: 2,
    },
    colorSwitch: {
        flexDirection: 'row',
    },
    colorPurple: {
        width: 20,
        height: 20,
        backgroundColor: '#8e44ad',
        marginRight: 5,
        borderRadius: 2,
    },
    colorPink: {
        width: 20,
        height: 20,
        backgroundColor: '#e91e63',
        marginRight: 5,
        borderRadius: 2,
    },
    colorBlue: {
        width: 20,
        height: 20,
        backgroundColor: '#3498db',
        marginRight: 5,
        borderRadius: 2,
    },
    productButtons: {
        marginTop: 4,
    },
    rowAlign: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    col2: {
        flex: 2,
    },
    btnIcon: {
        padding: 5,
        borderRadius: 2,
        backgroundColor: '#f5f5f5',
    },

    col8: {
        flex: 4,
    },
    btnPrimary: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 4,
        // backgroundColor: '#3498db',
        backgroundColor: 'red',
        fontSize: 16,
        color: 'white'
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
});
export default Demande;
