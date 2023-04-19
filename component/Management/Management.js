import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Parametres from './component/Parametres/Parametres';
import Profile from "./component/Profile/Profile";


const tab = createBottomTabNavigator();

function LesDemandes() {
    return (
        <View style={styles.page}>
            <Text>THE  REQUESTS</Text>
        </View>
    );
}

function profil() {
    return (
        <View style={styles.page}>
            <Profile />
        </View>
    );
}



function Parametre() {
    return (
        <View style={styles.page}>
            <Parametres />
        </View>
    );
}



export default function Management() {
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
                <tab.Screen name="MY REQUESTS" component={LesDemandes} />
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
    }


});
