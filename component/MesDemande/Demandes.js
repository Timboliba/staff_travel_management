import { Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
//import { Pressable, Box, HStack, Badge, Spacer, Flex } from 'react-native';
import axios from 'axios';
//import { Button } from 'react-native-paper';
import Approved from '../ButtonRequest/Approved';
import Denied from '../ButtonRequest/Denied';
//import Ask from '../ButtonRequest/Ask';

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

    console.log(typeof (data));

    return <>

        <View name="profil-container">

            {
                res.map((e) => {
                    return < >
                        <Image source={require("../../assets/approuve.png")} />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>

                            <Text style={{ backgroundColor: "red", width: "90%" }}>
                                {e._id}&nbsp;&nbsp;&nbsp;
                                {e.name}
                            </Text>
                            <Approved />
                            <Denied />
                        </View>
                    </>
                })
            }

        </View>
    </>;
}

export default Demandes;