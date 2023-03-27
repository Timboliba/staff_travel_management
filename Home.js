import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Linking } from "react-native";
import { NativeRouter, Route, Routes, Link } from 'react-router-native';
import Profil from './Profil';
import MesDemandes from './MesDemandes';
import SoumettreUneDemande from './SoumettreUneDemande';

const Home = () => {

    //Création d'un lien home
    const ouvrirURLHome = () => {
        Linking.openURL('/');
        alert("Vous avez cliquer sur Home");
    };

    //Création d'un lien mes demandes
    const ouvrirURLMesDeamandes = () => {
        Linking.openURL('/');
        alert("Ouvrir mes demande");
    };

    //Création d'un lien soumettre une demande
    //<Icon name="home" />
    const ouvrirURLSoumettreDemande = () => {
        Linking.openURL('/');
        alert("Soumettre une demande");
    };

    //Création d'un lien pour consulter son profil
    const ouvrirURLProfil = () => {
        Linking.openURL('./MesDemandes');
        alert("Vous avez cliquer sur Profil");
    };

    return <>
        <View style={styleHome.navBar}>
            <Link to="/">
                <Text style={styleHome.texte} onPress={ouvrirURLHome}>Home</Text>
            </Link>
            <Link to="/Profil">
                <Text style={styleHome.texte} onPress={ouvrirURLProfil}>Profil</Text>
            </Link>
            <Link to="/SoumettreUneDemande">
                <Text style={styleHome.texte} onLongPress={ouvrirURLSoumettreDemande}>Soumettre une demande</Text>
            </Link>
            <Link to="/MesDemandes">
                <Text style={styleHome.texte} onPress={ouvrirURLMesDeamandes}>Mes Demandes</Text>
            </Link>
        </View>
        <View name="section" style={styleHome.section}>

        </View>
    </>;
}

const styleHome = StyleSheet.create({
    navBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        width: '100%',
        height: '10%',
        paddingTop: 50
    },
    section: {
        width: "100%",
        backgroundColor: 'green',
        height: "90%"
    },
    texte: {
        fontWeight: 'bold',
        fontSize: '13'
    },
});

export default Home;