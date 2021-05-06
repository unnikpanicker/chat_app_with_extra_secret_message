import React, { useState } from "react";
import { View, Text } from "react-native"
import { Header, Overlay, ListItem, Avatar } from "react-native-elements";
import { TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/core';
import { ListData } from './../types';

interface IListComponentProps {
    row: ListData
}

const menuList = [
    {
        name: 'Enable ESM',
    },
    {
        name: 'Mute',
    },
]

export default function ListComponent({ row }: IListComponentProps) {
    const navigation = useNavigation();
    const [visibleMenu, setVisibleMenu] = useState(false);
    const showSettings = () => {
        setVisibleMenu(!visibleMenu);
    }

    return (
        <View>
            <Overlay isVisible={visibleMenu} overlayStyle={{ width: 250, backgroundColor:"#333" }} backdropStyle={{ opacity:0 }} onBackdropPress={showSettings}>
                <View>
                    {
                        menuList.map((l, i) => (
                            <ListItem key={i} onPress={() => navigation.navigate('ESMSettings', { row })} bottomDivider containerStyle={{height:40, backgroundColor:"#333", borderBottomWidth:0}}>
                                <ListItem.Content >
                                    <ListItem.Title style={{color:"#fff"}}>{l.name}</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                </View>
            </Overlay>

            <ListItem
                Component={TouchableHighlight}
                containerStyle={{}}
                disabledStyle={{ opacity: 0.5 }}
                onLongPress={() => showSettings()}
                onPress={() => navigation.navigate('Chat', { row })}
                pad={20}
                topDivider
            >
                <Avatar
                    rounded
                    source={{
                        uri:
                            "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
                    }}
                />
                <ListItem.Content>
                    <ListItem.Title>
                        <Text>{row.name}</Text>
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        <Text>{row.lastMessage}</Text>
                    </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </View>
    );
}