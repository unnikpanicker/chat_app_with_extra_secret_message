import React, { useState } from "react";
import { View, Text } from "react-native"
import { Header, Overlay, ListItem, Avatar } from "react-native-elements";
import { useNavigation } from '@react-navigation/core';

export default () => {
    const navigation = useNavigation();
    return (
            <Header
                backgroundImageStyle={{}}
                style={{}}
                barStyle="default"
                centerComponent={{
                    text: "Settings",
                    style: { color: "#fff", fontWeight: "bold", fontSize: 24 }
                }}
                centerContainerStyle={{}}
                containerStyle={{ borderBottomColor: "transparent", borderBottomWidth: 0, backgroundColor: "#333" }}
                leftComponent={{icon:"chevron-left", color: "#fff", onPress: () => { navigation.navigate("Home") }}}
                leftContainerStyle={{}}
                placement="left"
                // rightComponent={{ icon: "more-vert", color: "#fff", onPress: () => {  } }}
                rightContainerStyle={{ marginRight: 10 }}
                statusBarProps={{ backgroundColor: "#333" }}
            />
    );
}