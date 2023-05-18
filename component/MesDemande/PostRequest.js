import { Text, View, TextInput, StyleSheet, PixelRatio } from 'react-native';
import Logo from '../Logo/Logo';


const PostRequest = () => {
    return <>
        <Logo />
        <View style={{ width: '100%', alignItems: "center", height: '70%', paddingTop: '10%' }}>
            <TextInput style={request.input} name="motif" placeholder='Motif de déplacement' />
            <TextInput style={request.input} name="destination" placeholder='Lieu de destination' />
            <TextInput style={request.input} name="date" placeholder='Date de départ :jj/mm/aaaa' />
            <TextInput style={request.input} name="duree" placeholder='Durée de séjour' />
            <Text style={request.text} >Submit</Text>
        </View >
    </>
}
const request = StyleSheet.create({
    input: {
        width: 250,
        borderWidth: 2,
        borderRadius: 5,
        height: 30,
        marginBottom: 15,
        backgroundColor: "white"
    },
    text: {
        borderWidth: 2,
        borderColor: '#000000',
        fontSize: "22",
        borderRadius: 5,
        padding: 5,
        marginTop: 15,
        backgroundColor: "#1a53ff",
        textAlign: "center"
    }
})

export default PostRequest;