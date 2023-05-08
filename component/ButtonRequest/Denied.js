import { Text, StyleSheet, ImageBackground, Image } from 'react-native';

const Denied = () => {
    const Denied = () => {
        alert("Denied request")
    }
    return <>
        <Text style={styleDenied.buttonDenied} onPress={Denied}>Denied</Text>

    </>
}
const styleDenied = StyleSheet.create({
    buttonDenied: {
        borderWidth: 2,
        borderRadius: 50,
        width: 70,
        textAlign: "center",
        backgroundColor: "#ff0000"
    }
})
export default Denied; 