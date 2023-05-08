import { View } from 'native-base';
import { Text, StyleSheet, ImageBackground } from 'react-native';

const Ask = () => {
    return <>
        <View style={styleAsk.buttonAsk}>
            <ImageBackground source={require('../../assets/logo.png')} style={styleAsk.image}>
                Contenu du composant
            </ImageBackground>
        </View>
    </>
}
const styleAsk = StyleSheet.create({
    buttonAsk: {
        borderWidth: 2,
        borderRadius: 20,
        textAlign: "center",
        width: 40,
        backgroundImage: URL('../../assets/Ad.png'),
        backgroundColor: "#0000ff"
    }
    ,
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
})
export default Ask; 