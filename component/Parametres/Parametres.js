import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Parametres = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [langueVisible, setLangueVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleLangue = () => {
        setLangueVisible(!langueVisible);
    };

    const handleLanguageSelection = (language) => {
        setSelectedLanguage(language);
    };

    //Confirmation choix de la langue
    const handlerConfirmLanguage = (language) => {
        //Changement sur l'ensemble de la structure de l'application 
        alert("La langue seras changer en : " + language)
    };
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.optionContainer} onPress={toggleMenu}>
                <Ionicons name="shield-checkmark-outline" size={27} color="red" />
                <Text style={styles.optionText}>SECURITE</Text>
            </TouchableOpacity>
            {menuVisible && (
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Text style={styles.menuText}>PASSWORD</Text>
                    <Text style={styles.menuText}>FACE ID</Text>
                </View>
            )}

            <TouchableOpacity style={styles.optionContainer}>
                <Ionicons name="color-palette-outline" size={27} color="red" />
                <Text style={styles.optionText}>AFFICHAGE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer} onPress={toggleLangue}>
                <Ionicons name="language-outline" size={27} color="red" />
                <Text style={styles.optionText}>LANGUES</Text>
            </TouchableOpacity>
            {langueVisible && (
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[styles.languageOption, styles.menuText]}
                        onPress={() => handleLanguageSelection('français')}
                    >
                        <Text style={styles.languageText}>Français</Text>
                        {selectedLanguage === 'français' && (
                            <Ionicons name="radio-button-on" size={24} color="green" />
                        )}
                        {selectedLanguage !== 'français' && (
                            <Ionicons name="radio-button-off" size={24} color="gray" />
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.languageOption, styles.menuText]}
                        onPress={() => handleLanguageSelection('arabe')}
                    >
                        <Text style={styles.languageText}>Arabe</Text>
                        {selectedLanguage === 'arabe' && (
                            <Ionicons name="radio-button-on" size={24} color="green" />
                        )}
                        {selectedLanguage !== 'arabe' && (
                            <Ionicons name="radio-button-off" size={24} color="gray" />
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.languageOption, styles.menuText]}
                        onPress={() => handleLanguageSelection('anglais')}
                    >
                        <Text style={styles.languageText}>Anglais</Text>
                        {selectedLanguage === 'anglais' && (
                            <Ionicons name="radio-button-on" size={24} color="green" />
                        )}
                        {selectedLanguage !== 'anglais' && (
                            <Ionicons name="radio-button-off" size={24} color="gray" />
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.languageOption, styles.menuText]}
                        onPress={() => handlerConfirmLanguage(selectedLanguage)}

                    >
                        <Text style={styles.languageText}>Confirmation</Text>

                    </TouchableOpacity>

                </View>
            )}

            <TouchableOpacity style={styles.optionContainer}>
                <Ionicons name="phone-portrait-outline" size={27} color="red" />
                <Text style={styles.optionText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '99%'
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
    },
    optionText: {
        marginLeft: 25,
        fontSize: 18,
    },
    menu: {
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    menuText: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        fontSize: 18,
    },
    languageContainer: {
        marginTop: 16,
        marginLeft: 16,
    },
    languageOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    languageText: {
        marginLeft: 8,
        fontSize: 16,
    },
});

export default Parametres;
