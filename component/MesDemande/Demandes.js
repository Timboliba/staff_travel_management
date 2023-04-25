import { Text, TextInput, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { Pressable,Box, HStack, Badge, Spacer, Flex } from 'react-native';
import axios from 'axios';
const Demandes = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get("http://localhost:5000/data").then((res) => setData({
            ...data,
            ...res.data,
        })
      );
    }, [])

    let res = Object.values(data);

    console.log(typeof(data));
    return <>
        <View name="profil-container">
            {/* <Text>hello mes demandes</Text> */}

            {
                res.map((e) => {
                    return <Box alignItems="center" key={e._id}>
                    
                  </Box>;
              
                })
            }

        </View>
    </>;
}

export default Demandes;