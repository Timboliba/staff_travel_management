import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
//import { Pressable, Box, HStack, Badge, Spacer, Flex } from 'react-native';
import axios from 'axios';
import Demande from './Demande';




const Stack = createNativeStackNavigator();


const Demandes = ({ navigation }) => {

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


    const [demandes, setDemandes] = useState([]);

    const [data, setData] = useState({});
    useEffect(() => {
        axios.get("https://test-server-l6fk.onrender.com/api").then((res) => setData({
            ...data,
            ...res.data,
        })
        );
    }, [])

    let res = Object.values(data);

    console.log(typeof (data));
    const handleDemandePress = (e) => {
        // Rediriger vers la page de détails de la demande
        navigation.navigate('DemandeDetails', { id: e._id });
    };
    return <>
        <View name="request">
            <Button title='Add Request' onPress={() => navigation.push('PostRequests')} />
        </View>
        <ScrollView name="profil-container">

            {
                res.map((e) => {
                    if (e.userId === getCookieValue('id')) {
                        return < >

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                    padding: 10,
                                    backgroundColor: '#FFFFFF',
                                    borderBottomWidth: 0.5
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
                                <TouchableOpacity onPress={() => handleDemandePress(e)} >
                                    <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Destination: {e.destination}</Text>
                                    <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Date: {e.date_depart}</Text>
                                </TouchableOpacity>

                            </View>
                        </>
                    }

                })
            }

        </ScrollView >
    </>;
}

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

export default Demandes;