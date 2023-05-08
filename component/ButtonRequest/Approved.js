import { Text, StyleSheet } from 'react-native';

const Approved = () => {
    const Approved = () => {
        alert("Approved request")
    }
    return <>
        <Text style={styleApprved.buttonApproved} onPress={Approved}>Approved</Text>
    </>
}
const styleApprved = StyleSheet.create({
    buttonApproved: {
        borderWidth: 2,
        borderRadius: 50,
        width: 70,
        textAlign: "center",
        backgroundColor: "#33cc33"
    }
})
export default Approved; 