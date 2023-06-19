import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormData from 'form-data';

const PostRequest = () => {

    // Fonction pour récupérer la valeur d'un cookie par son nom
    const getCookieValue = (name) => {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split("=");
            if (cookie[0] === name) {
                return cookie[1];
            }
        }
        return "";
    };

    // Récupération du nom d'utilisateur à partir du cookie

    const usernameFromCookie = getCookieValue("id");

    const [motif, setMotif] = useState('');
    const [destination, setDestination] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [dureeSejour, setDureeSejour] = useState('');

    //Fonction de vérification des differentes champs du formulaire
    const handlerPost = async (e) => {

        if (motif === '') {
            alert('Veuillez renseigner le motif de votre déplacement');
            return;
        }
        if (destination === '') {
            alert('Veuillez renseigner votre destination');
            return;
        }
        if (departDate === '') {
            alert('Veuillez renseigner votre date de départ');
            return;
        }
        if (dureeSejour === '') {
            alert('Veuillez renseigner la durée de votre déplacement');
            return;
        }

        //create a new JSON object to send to the backend
        const doc = {};
        doc.motif = motif;
        doc.depart = departDate;
        doc.destination = destination;
        doc.duree = dureeSejour;
        doc.userId = getCookieValue('id');
        doc.etat = "no";

        //display the JSON object to make sure it is correctly binded
        console.log(JSON.stringify(doc));

        //Url to send it the object (important: use http://)
        const url = 'http://localhost:8080/api';

        //Using fetch method to send the data to the backend fetch(destination, method)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(doc),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }).then(res => res.json()).catch(e => console.log("Error: ", e))
            .then(res => console.log('Success: ', res), navigation.navigate('index'));
    }


    return <>

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                name="motif"
                placeholder="Motif de déplacement "
                onChangeText={text => setMotif(text)}
            />
            <TextInput
                style={styles.input}
                name="destination"
                placeholder="Lieu de destination"
                onChangeText={text => setDestination(text)}
            />
            <TextInput
                style={styles.input}
                name="date"
                placeholder="Date de départ :jj/mm/aaaa"
                onChangeText={text => setDepartDate(text)}
            />
            <TextInput
                style={styles.input}
                name="duree"
                placeholder="Durée de séjour"
                onChangeText={text => setDureeSejour(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handlerPost}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    </>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
export default PostRequest;