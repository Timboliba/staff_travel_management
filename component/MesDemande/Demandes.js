import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { useEffect, useState } from 'react';
//import { Pressable, Box, HStack, Badge, Spacer, Flex } from 'react-native';
import axios from 'axios';



const Demandes = ({ navigation }) => {

    //fonction denied
    const Denied = () => {
        alert("Denied request");
    }

    //fonction approved
    const Approved = () => {
        alert("Approved request")
    }

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

    return <>
        <View name="request">
            <Button title='Add Request' onPress={() => navigation.push('PostRequests')} />
        </View>
        <ScrollView name="profil-container">

            {
                res.map((e) => {
                    return < >

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 15, marginTop: 5 }}>

                            <Text style={{ backgroundColor: "red", width: "50%" }} name="request">
                                {e._id}&nbsp;&nbsp;&nbsp;
                                {e.date_depart}&nbsp;&nbsp;&nbsp;
                                {e.destination}&nbsp;&nbsp;&nbsp;
                                {e.duree} jours&nbsp;&nbsp;&nbsp;
                                {e.id_employee}&nbsp;&nbsp;&nbsp;
                            </Text>
                            <Text style={styleApprved.buttonApproved} onPress={Approved}>Approved</Text>
                            <Text style={styleDenied.buttonDenied} onPress={Denied}>Denied</Text>
                        </View>
                    </>
                })
            }

        </ScrollView>
    </>;
}


const styleApprved = StyleSheet.create({
    buttonApproved: {
        width: 30,
        height: 40,
        textAlign: "center",

    }
});

const styleDenied = StyleSheet.create({
    buttonDenied: {
        width: 30,
        textAlign: "center",
        backgroundColor: "transparent"
    }
});


export default Demandes;