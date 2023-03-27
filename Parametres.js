import { Text, TextInput, View, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Parametres = () => {
    return <>
        <View style={{ height: "100%" }}>
            <View style={StyleParametre.parametreStyle}>
                <Ionicons name="shield-checkmark-outline" size={27} color='red' /><Text style={StyleParametre.textPara}>Sécurité</Text>
            </View>
            <View style={StyleParametre.parametreStyle}>
                <Ionicons name="color-palette-outline" size={27} color='red' /><Text style={StyleParametre.textPara}>Affichage</Text>
            </View>
            <View style={StyleParametre.parametreStyle}>
                <Ionicons name="language-outline" size={27} color='red' /><Text style={StyleParametre.textPara}>Langues</Text>
            </View>
            <View style={StyleParametre.parametreStyle}>
                <Ionicons name="phone-portrait-outline" size={27} color='red' /><Text style={StyleParametre.textPara}>Appareils</Text>
            </View>
        </View>
    </>;
}

export default Parametres;


const StyleParametre = StyleSheet.create({
    parametreStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 25,
        borderBottomColor: 'red',
        borderBottomWidth: '2'
    },
    textPara: {
        marginLeft: 25
    }
})