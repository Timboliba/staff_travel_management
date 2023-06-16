import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
//import { Pressable, Box, HStack, Badge, Spacer, Flex } from 'react-native';
import axios from 'axios';
import Demande from './Demande';




const Stack = createNativeStackNavigator();


const Demandes = ({ navigation }) => {
    const [demandes, setDemandes] = useState([]);
    //fonction denied
    const Denied = () => {
        alert("Denied request");
    }

    //fonction approved
    const Approved = () => {
        alert("Approved request")
    }

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
        navigation.navigate('DemandeDetails', { Demande });
    };
    return <>
        <View name="request">
            <Button title='Add Request' onPress={() => navigation.push('PostRequests')} />
        </View>
        <ScrollView name="profil-container">

            {
                res.map((e) => {
                    return < >

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                padding: 10,
                                backgroundColor: '#FFFFFF',
                                borderBottomWidth: 0.5
                            }}
                        >
                            <Image
                                source={{ uri: 'https://www.wizishop.fr/media/609e23feede64c2458d7218c/v1/formation-ecommerce-gratuite.webp' }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginRight: 10,
                                }}
                            />
                            <TouchableOpacity onPress={() => handleDemandePress(e)}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>ID: {e._id}</Text>
                                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Destination: {e.destination}</Text>
                            </TouchableOpacity>
                            <View style={styles.container}>
                                <Text style={[styles.text, styles.approvedButton]} onPress={Approved}>
                                    Approved
                                </Text>
                                <Text style={[styles.text, styles.deniedButton]} onPress={Denied}>
                                    Denied
                                </Text>
                            </View>
                        </View>
                    </>
                })
            }

        </ScrollView >
    </>;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    approvedButton: {
        backgroundColor: 'green',
        color: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 5
    },
    deniedButton: {
        backgroundColor: 'red',
        color: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
});

export default Demandes;