import { Text, TextInput, View, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';

const Parametres = () => {
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

export default Parametres;


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
        fontSize: 22
    },
    langue: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 22
    },
    menuText: {
        paddingBottom: 20,
        borderBottomColor: 'red',
        borderBottomWidth: '2'


    }
})