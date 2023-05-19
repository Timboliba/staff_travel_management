import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import PostRequest from '../MesDemande/PostRequest';
//import { Pressable, Box, HStack, Badge, Spacer, Flex } from 'react-native';
import axios from 'axios';
//import { Button } from 'react-native-paper';

//Composante demandes
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
        <ScrollView name="profil-container">
            <Text style={{ fontSize: 25, borderRadius: 1, backgroundColor: "green", width: 30, textAlign: "center", color: "white", marginTop: 5, marginBottom: 5 }} onPress={() => navigation.push('PostRequests')}>
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

//Soumission de requete
const PostRequests = () => {
    return <>
        <PostRequest />
    </>
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

const Parametre = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [langueVisible, setLangueVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleLangue = () => {
        setLangueVisible(!langueVisible);
    };

    return <>
        <View style={{ height: "100%" }}>
            <View>
                <View style={StyleParametre.parametreStyle}>
                    <Ionicons name="shield-checkmark-outline" size={27} color='red' /><Text style={StyleParametre.textPara} onPress={toggleMenu}>Sécurité</Text>
                </View>
                {menuVisible && (
                    <View style={StyleParametre.menu}>
                        <Text style={StyleParametre.menuText}>PASSWORD</Text>
                        <Text style={StyleParametre.menuText}>FACE ID</Text>
                    </View>)}
            </View>
            <View style={StyleParametre.parametreStyle}>
                <Ionicons name="color-palette-outline" size={27} color='red' /><Text style={StyleParametre.textPara}>Affichage</Text>
            </View>
            <View>
                <View style={StyleParametre.parametreStyle}>
                    <Ionicons name="language-outline" size={27} color='red' /><Text style={StyleParametre.textPara} onPress={toggleLangue}>Langues</Text>
                </View>
                {langueVisible && (
                    <View style={StyleParametre.langue}>
                        <Text style={StyleParametre.menuText}>Choix de langue</Text>
                        <Text style={StyleParametre.menuText}>Merci de choisir la langue vôtre application</Text>
                        <View style={StyleParametre.parametreStyle}>
                            <RadioButton value="anglais" style={{ backgroudColor: 'green' }} /><Text style={{ marginRight: 25 }}>English</Text><Text>Drapeau</Text>
                        </View>
                        <View style={StyleParametre.parametreStyle}>
                            <RadioButton value="français" style={{ backgroudColor: 'green' }} /><Text style={{ marginRight: 25 }}>Français</Text><Text>Drapeau</Text>
                        </View>
                        <View style={StyleParametre.parametreStyle}>
                            <RadioButton value="arabe" style={{ backgroudColor: 'green' }} /> <Text style={{ marginRight: 25 }}>Arabes</Text><Text>Drapeau</Text>
                        </View>
                        <View style={StyleParametre.parametreStyle}>
                            <RadioButton value="espagnol" style={{ backgroudColor: 'green' }} /><Text style={{ marginRight: 25 }}>Espagnol</Text><Text>Drapeau</Text>
                        </View>
                    </View>)}
            </View>
            <View style={StyleParametre.parametreStyle}>
                <Ionicons name="phone-portrait-outline" size={27} color='red' /><Text style={StyleParametre.textPara}>Appareils</Text>
            </View>
        </View>
    </>;
}

const Drawer = createNativeStackNavigator()
export default Home = () => {
    return <>
        <Drawer.Navigator initialRouteName='Demandes'>
            <Drawer.Screen name='Demandes' component={Demandes} />
            <Drawer.Screen name='Profile' component={Profile} />
            <Drawer.Screen name='Parametre' component={Parametre} />
            <Drawer.Screen name='PostRequests' component={PostRequests} />
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


const StyleParametre = StyleSheet.create({
    parametreStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 25
    },
    textPara: {
        marginLeft: 25
    },
    menu: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '22'
    },
    langue: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '22'
    },
    menuText: {
        paddingBottom: 20,
        borderBottomColor: 'red',
        borderBottomWidth: '2'

    }
})