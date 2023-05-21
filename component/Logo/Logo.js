import { View, Image, ImageBackground } from 'react-native';

const Logo = () => {
    return <>
        <View style={{ backgroundColor: "transparent", width: '100%', height: '40%', backgroundColor: "red", padding: 0, margin: 0 }}>
            <Image source={require('../../assets/logo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View>
    </>;
}
export default Logo;