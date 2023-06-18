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
        axios.get("http://localhost:8080/api").then((res) => setData({
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

                            {/*} <View
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

                            </View>*/}








                            <View style={styles.container}>
                                <View style={styles.row}>
                                    <View style={styles.col}>
                                        <View style={styles.card}>
                                            <View style={styles.cardHeader}>
                                                <Text style={styles.cardTitle}>Destination: {e.destination}</Text>
                                            </View>
                                            <View style={styles.cardBody}>
                                                <View style={styles.widget49}>
                                                    <View style={styles.widget49TitleWrapper}>
                                                        <View style={styles.widget49DatePrimary}>
                                                            <Image
                                                                source={require('../../assets/logo.png')}
                                                                style={{
                                                                    width: 50,
                                                                    height: 50,
                                                                    marginRight: 10,
                                                                }}

                                                            />
                                                        </View>
                                                    </View>
                                                    <View style={styles.widget49MeetingPoints}>
                                                        <Text style={styles.widget49MeetingItem}>Date: {e.date_depart}</Text>
                                                    </View>
                                                    <View style={styles.widget49MeetingAction}>
                                                        <Text style={styles.button} onPress={() => handleDemandePress(e)}>Show more</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </>
                    }

                })
            }

        </ScrollView >
    </>;
}

/*const styles = StyleSheet.create({
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
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flex: 1,
    },
    card: {
        borderWidth: 2,
        borderColor: '#eaeaea',
        borderRadius: 4,
        marginBottom: 20,
    },
    cardHeader: {
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        padding: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    cardBody: {
        padding: 10,
    },
    widget49: {
        marginBottom: 10,
    },
    widget49TitleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    widget49DatePrimary: {
        marginRight: 10,
    },
    widget49DateDay: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    widget49DateMonth: {
        fontSize: 12,
        textTransform: 'uppercase',
    },
    widget49MeetingInfo: {
        flex: 1,
    },
    widget49ProTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    widget49MeetingTime: {
        fontSize: 12,
        color: '#888888',
    },
    widget49MeetingPoints: {
        marginBottom: 10,
    },
    widget49MeetingItem: {
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    widget49MeetingAction: {
        alignItems: 'flex-end',
    },
    button: {
        fontSize: 15,
        color: '#007bf0',
        fontWeight: '900'
    },
});
export default Demandes;