import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Formulaire from './Formulaire';
import Parametres from './Parametres';

const tab = createBottomTabNavigator();

function Accueil() {
  return (
    <View style={styles.page}>
      <Text>HOME</Text>
    </View>
  );
}

function Profil() {
  return (
    <View style={styles.page}>
      <Text>PROFILES</Text>
    </View>
  );
}

function MesDemandes() {
  return (
    <View style={styles.page}>
      <Text>MY  REQUESTS</Text>
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



export default function App() {
  return <>
    <NavigationContainer>
      <tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == "HOME") {
              iconName = "home"
            } else if (route.name == "SETTINGS") {
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
        <tab.Screen name="HOME" component={Accueil} />
        <tab.Screen name="PROFILES" component={Profil} />
        <tab.Screen name="MY REQUESTS" component={MesDemandes} />
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
