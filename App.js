import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './component/Home/Home';

import Formulaire from './component/signIn/Formulaire';

const Authentification = () => {
  return <>
    <Formulaire />
  </>
}

const Homes = () => {
  return <>
    <Home />
  </>
}

const stack = createNativeStackNavigator();
export default function App() {

  return <>
    <NavigationContainer>
      <stack.Navigator initialRouteName={Authentification}>
        <stack.Screen name="Authentification" component={Authentification} />
        <stack.Screen name="Homes" component={Homes} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  </>;
}

