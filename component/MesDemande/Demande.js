import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Demande = () => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#FFFFFF',
            }}
            onPress={() => {
                // Insérer ici la logique de redirection vers le lien spécifié
            }}
        >
            <Image
                source={{ uri: 'https://www.wizishop.fr/media/609e23feede64c2458d7218c/v1/formation-ecommerce-gratuite.webp' }}
                style={{
                    width: 50,
                    height: 50,
                    marginRight: 10,
                }}
            />
            <View>
                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Ressources et Formations</Text>
                <Text>Formation e-commerce en ligne : 55 vidéos offertes (+Bootcamp gratuit)</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Demande;
