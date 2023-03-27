import { View, Image } from 'react-native';

const Logo = () => {
    return <>
        <View style={{ backgroundColor: "transparent", height: '40%', backgroundColor: "red", padding: 0, margin: 0 }}>
            <Image source={require('./assets/logo.png')} style={{ height: '100%' }} />
        </View>
    </>;
}
export default Logo;