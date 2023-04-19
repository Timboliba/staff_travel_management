import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, PixelRatio, Button, StyleSheet, ScrollView, Linking } from "react-native";




const Home = () => {
    function alerte() {
        alert("about us");
    }

    return <>
        <View name="contain" style={styleHome.contain}>
            <Text name="fisrt-contain" style={styleHome.text}>
                Mes Demandes
            </Text>
            <Text name="second-contain" style={styleHome.text}>
                Rapport
            </Text>
            <Text name="" style={styleHome.text}>
                CONTACT US
            </Text>
            <Text name="" style={styleHome.text} onPress={alerte}>
                ABOUT US
            </Text>
        </View>
    </>;
}

const styleHome = StyleSheet.create({

    contain: {
        display: 'flex',
        flexDirection: 'row',
        height: '99%',
        width: '100%',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingTop: '25%'
    },
    text: {
        width: '40%',
        borderWidth: PixelRatio.getPixelSizeForLayoutSize(1),
        borderColor: 'red',
        height: '25%',
        marginBottom: '10%',
        marginLeft: PixelRatio.getPixelSizeForLayoutSize(5),
        marginRight: PixelRatio.getPixelSizeForLayoutSize(5),
        backgroundColor: 'green',
        textAlign: 'center',
        paddingTop: '15%'
    }


});

export default Home;