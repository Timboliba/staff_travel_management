import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        navigation.navigate('Details', { id: e._id });
    };
    return <>

        {/*redirect to form*/}
        <View name="request" style={{ backgroundColor: "bleu" }}>
            <TouchableOpacity name="request" style={StyleHome.style1} onPress={() => navigation.navigate('PostRequests')} >
                <View style={style1.container}>
                    <View style={style1.row}>
                        <View style={style1.col}>
                            <View style={style1.card}>
                                <View style={style1.cardHeader}>
                                    <Text style={style1.cardTitle}>Ajouter une demande <Ionicons name="chevron-forward-sharp" size={27} color="white" /></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        <ScrollView name="profil-container">

            {
                res.map((e) => {
                    if (e.userId === getCookieValue('id')) {
                        return < >
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
                                                        <Text style={styles.button} onPress={() => handleDemandePress(e)}>Voir plus</Text>
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
        color: 'blue',
        fontWeight: '900'
    },
});

const StyleHome = StyleSheet.create({
    homeStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
        , height: 350
    },
    style1: {
        // paddingBottom: 25,
    }
})



const style1 = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'blue',
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flex: 1,
    },
    card: {
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 4,

    },
    cardHeader: {


        padding: 10,
    },
    cardTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2%',
        //alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white'
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