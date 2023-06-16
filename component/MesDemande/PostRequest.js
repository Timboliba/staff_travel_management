import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormData from 'form-data';
//récuperation du champ motif




const PostRequest = () => {
    const [motif, setMotif] = useState('');
    const [destination, setDestination] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [dureeSejour, setDureeSejour] = useState('');
    const formData = new FormData();

    //Fonction de vérification des differentes champs du formulaire
    const handlerPost = (e) => {
        // e.preventDefault();
        //alert("bouton cliquer!");

        // if (motif == "") {
        //     alert("Veuillez renseigner le motif de votre déplacement");
        // } else {
        //     if (destination == "") {
        //         alert("Veuillez renseigner vôtre destination");
        //     } else {
        //         if (departDate == "") {
        //             alert("Veuillez renseigner vôtre date de depart");
        //         } else {
        //             if (dureeSejour == "") {
        //                 alert("Veuillez renseigner la durée de votre déplacement");
        //             }
        //         }
        //     }



        // }
        // alert(motif + " ,à " + destination + " départ prevu pour le " + departDate + "durée du sejour " + dureeSejour + " jours");
        /*  let newdoc = {
              Motif: motif,
              Destination: destination,
              DateDepart: departDate,
              Duree: dureeSejour,
          }
          console.log(JSON.stringify(newdoc));
          const res = axios.post('https://test-server-l6fk.onrender.com/api', newdoc)*/

        // e.target.reset()
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

        const newdoc = {
            Motif: motif,
            Destination: destination,
            DateDepart: departDate,
            Duree: dureeSejour,
        };

        axios.post('https://test-server-l6fk.onrender.com/api', newdoc)
            .then(response => {
                console.log('Données envoyées avec succès:', response.data);
                // Réinitialiser les champs du formulaire si nécessaire
                setMotif('');
                setDestination('');
                setDepartDate('');
                setDureeSejour('');
            })
            .catch(error => {
                console.error('Erreur lors de l\'envoi des données:', error);
                // Traiter l'erreur ou afficher un message d'erreur approprié
            });
    }
    // useEffect(() => {
    //     // formData.append('motif', motif);
    //     // formData.append('destination', destination);
    //     // formData.append('data_depart', departDate);
    //     // formData.append('duree', dureeSejour);
    //     const newdoc = {
    //         Motif: motif,
    //         Destination: destination,
    //         DateDepart: departDate,
    //         Duree: dureeSejour,
    //     }
    //     axios.post('https://test-server-l6fk.onrender.com/api', newdoc)
    // })

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