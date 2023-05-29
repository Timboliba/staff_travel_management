import { Text, StyleSheet, View, Button } from 'react-native';


const index = ({ navigation }) => {

    return (
        <View name="home-container" style={StyleHome.homeStyle}>
            <View name="request" style={StyleHome.style1}>
                <Button title='MY REQUEST' onPress={() => navigation.push('Demandes')} />
            </View>
            <View name="profil" style={StyleHome.style1}>
                <Button title='PROFIL' onPress={() => navigation.push('Profile')} />
            </View>
            <View name="settings">
                <Button title='SETTINGS' onPress={() => navigation.push('Parametres')} />
            </View>
        </View>
    );
}

export default index;


const StyleHome = StyleSheet.create({
    homeStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    style1: {
        paddingBottom: 25,
    }
})
