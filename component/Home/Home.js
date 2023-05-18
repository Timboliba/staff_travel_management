import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
//import { Pressable, Box, HStack, Badge, Spacer, Flex } from 'react-native';
import axios from 'axios';
//import { Button } from 'react-native-paper';

//Composante demandes
const Demandes = () => {
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
        <ScrollView name="profil-container">
            <Text style={{ fontSize: 25, borderRadius: 1, backgroundColor: "green", width: 30, textAlign: "center", color: "white", marginTop: 2, marginBottom: 5 }}>
                +
            </Text>

            {
                res.map((e) => {
                    return < >

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15, marginTop: 5 }}>

                            <Text style={{ backgroundColor: "red", width: "50%" }} name="request">
                                {e._id}&nbsp;&nbsp;&nbsp;
                                {e.name}
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


//Composante Profil

const Profile = ({ navigation }) => {
    return <>
        <View name="profil-container">
            <Text>hello profil</Text>
            <Button
                title="Go to Details... profil"
                onPress={() => navigation.push('Demandes')}
            />
        </View>
    </>;
}

const Drawer = createNativeStackNavigator()
export default Home = () => {
    return <>
        <Drawer.Navigator initialRouteName='Profile'>
            <Drawer.Screen name='Demandes' component={Demandes} />
            <Drawer.Screen name='Profile' component={Profile} />
        </Drawer.Navigator>
    </>;
}

const styleApprved = StyleSheet.create({
    buttonApproved: {
        width: 70,
        textAlign: "center",
        backgroundColor: "#33cc33"
    }
})

const styleDenied = StyleSheet.create({
    buttonDenied: {
        width: 'auto',
        textAlign: "center",
        backgroundColor: "#ff0000"
    }
})