import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Index = ({ navigation }) => {

    return (
        <View name="home-container" style={StyleHome.homeStyle}>
            <View>

            </View>
            <TouchableOpacity name="request" style={StyleHome.style1} onPress={() => navigation.push('Mes Demandes')} >
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <View style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.cardTitle}><Text>Mes déplacements</Text><Ionicons name="chevron-forward-sharp" size={27} color="black" /></Text>
                                </View>



                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            {/* Profile */}
            <TouchableOpacity name="request" style={StyleHome.style1} onPress={() => navigation.push('Profile')} >
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <View style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.cardTitle}><Text>Profile</Text><Ionicons name="chevron-forward-sharp" size={27} color="black" /></Text>
                                </View>



                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>



            {/* Profile */}
            <TouchableOpacity name="request" style={StyleHome.style1} onPress={() => navigation.push('Parametres')} >
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <View style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.cardTitle}><Text>Paramètres</Text><Ionicons name="chevron-forward-sharp" size={27} color="black" /></Text>
                                </View>



                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Index;


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



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
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


        padding: 10,
    },
    cardTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2%',
        //alignItems: 'center',
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
