import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';





const tab = createBottomTabNavigator();

function MesDemandes() {
    return (
        <View style={styles.page}>
            <Button
                title="Mon bouton"
                onPress={this.handleClick}
                style={styles.bouton} />
        </View>
    );
}

function profil() {
    return (
        <View style={styles.page}>

        </View>
    );
}



function Parametre() {
    return (
        <View style={styles.page}>

        </View>
    );
}



export default function App() {
    return <>
        <NavigationContainer>
            <tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name == "SETTINGS") {
                            iconName = "cog-outline"
                        }
                        else if (route.name == "PROFILES") {
                            iconName = "person-circle-outline"
                        }
                        else if (route.name == "MY REQUESTS") {
                            iconName = "albums-outline"
                        }
                        return <Ionicons name={iconName} size={27} color='red' />
                    }
                })}

            >
                <tab.Screen name="MY REQUESTS" component={MesDemandes} />
                <tab.Screen name="PROFILES" component={profil} />
                <tab.Screen name="SETTINGS" component={Parametre} />
            </tab.Navigator>
        </NavigationContainer>
    </>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    page: {
        backgroundColor: 'whiteSmoke'
    },
    bouton: {
        borderWidth: '2',
        borderColor: 'green'
    }


});
