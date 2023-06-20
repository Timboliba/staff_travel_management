import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button } from 'react-native';
import PostRequest from '../MesDemande/PostRequest';
import Demandes from '../MesDemande/Demandes';
import Profile from '../Profile/Profile';
import Parametres from '../Parametres/Parametres';
import Index from './Index';
import Demande from '../MesDemande/Demande';


const PostRequests = () => {
    return <>
        <PostRequest />
    </>
}


const Drawer = createNativeStackNavigator();

const Home = () => {
    return <>
        <Drawer.Navigator initialRouteName='Acceuil'>
            <Drawer.Screen name='Mes Demandes' component={Demandes} />
            <Drawer.Screen name='Profile' component={Profile} />
            <Drawer.Screen name='Parametres' component={Parametres} />
            <Drawer.Screen name='Acceuil' component={Index} />
            <Drawer.Screen name='PostRequests' component={PostRequests} />
            <Drawer.Screen name="Details" component={Demande} />
        </Drawer.Navigator>
    </>;
}

// const styleApprved = StyleSheet.create({
//     buttonApproved: {
//         width: 70,
//         textAlign: "center",
//         backgroundColor: "#33cc33"
//     }
// })

// const styleDenied = StyleSheet.create({
//     buttonDenied: {
//         width: 'auto',
//         textAlign: "center",
//         backgroundColor: "#ff0000"
//     }
// })


// const StyleParametre = StyleSheet.create({
//     parametreStyle: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingBottom: 25
//     },
//     textPara: {
//         marginLeft: 25
//     },
//     menu: {
//         display: 'flex',
//         alignItems: 'center',
//         fontSize: '22'
//     },
//     langue: {
//         display: 'flex',
//         alignItems: 'center',
//         fontSize: '22'
//     },
//     menuText: {
//         paddingBottom: 20,
//         borderBottomColor: 'red',
//         borderBottomWidth: '2'

//     }
// })

// const StyleHome = StyleSheet.create({
//     homeStyle: {
//         display: 'flex',
//         flexDirection: 'column',
//     }
// })

// const styles = StyleSheet.create({
//     logoutButton: {
//         position: 'absolute',
//         bottom: 20,
//         right: 20,
//         backgroundColor: 'transparent',
//         borderWidth: 0,
//         elevation: 0,
//     },
//     logoutButtonText: {
//         color: 'red',
//         fontSize: 16,
//     },
// });


export default Home;