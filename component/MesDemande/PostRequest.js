import { Text, View, TextInput, StyleSheet, PixelRatio } from 'react-native';
import React, { useState, useEffect } from 'react';

//récuperation du champ motif




const PostRequest = () => {
    const [motif, setMotif] = useState('');
    const [destination, setDestination] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [dureeSejour, setDureeSejour] = useState('');

    //Fonction de vérification des differentes champs du formulaire
    const handlerPost = () => {
        alert("bouton cliquer!");

        if (motif == "") {
            alert("Veuillez renseigner le motif de votre déplacement");
        } else {
            if (destination == "") {
                alert("Veuillez renseigner vôtre destination");
            } else {
                if (departDate == "") {
                    alert("Veuillez renseigner vôtre date de depart");
                } else {
                    if (dureeSejour == "") {
                        alert("Veuillez renseigner la durée de votre déplacement");
                    }
                }
            }

            alert(motif + " ,à " + destination + " départ prevu pour le " + departDate + "durée du sejour " + dureeSejour + " jours");
        }
    }


    return <>

        <View style={{ width: '100%', alignItems: "center", height: '70%', paddingTop: '10%' }}>
            <TextInput style={request.inputArea} name="motif" placeholder='Motif de déplacement' multiline numberOfLines={10} onChangeText={setMotif} />
            <TextInput style={request.input} name="destination" placeholder='Lieu de destination' onChangeText={setDestination} />
            <TextInput style={request.input} name="date" placeholder='Date de départ :jj/mm/aaaa' onChangeText={setDepartDate} />
            <TextInput style={request.input} name="duree" placeholder='Durée de séjour' onChangeText={setDureeSejour} />
            <Text style={request.text} onPress={handlerPost}>Submit</Text>
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
    },
    inputArea: {
        width: 250,
        borderWidth: 2,
        borderRadius: 5,
        height: 30,
        marginBottom: 15,
        backgroundColor: "white",
        height: 55
    }
})

export default PostRequest;