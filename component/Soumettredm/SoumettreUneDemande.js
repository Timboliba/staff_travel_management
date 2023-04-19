import { Text, TextInput, View, Image } from 'react-native';

const SoumettreUneDemande = () => {
    return <>
        <View name="request-container">
            <View name="FirsnameContain">
                <Text>Fistname:</Text>
                <TextInput />
            </View>
            <View name="LastnameContain">
                <Text>Lastname:</Text>
                <TextInput />
            </View>
            <View name="departurConatain">
                <Text>Departur date:</Text>
                <TextInput placeholder="jj-mm-aaaa" />
            </View>
            <View name="">
                <Text>Arrival date:</Text>
                <TextInput placeholder="jj-mm-aaaa" />
            </View>
            <View name="">
                <Text>Place of departur:</Text>
                <TextInput placeholder="Place of departur" />
            </View>

        </View>
    </>;
}

export default SoumettreUneDemande;