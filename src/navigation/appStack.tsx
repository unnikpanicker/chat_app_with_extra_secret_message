import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from '../views/chatScreen/chatScreenView';
import MainScreen from '../views/mainScreen/mainScreenView';
import HeaderSide from '../components/header';
import {Header} from 'react-native/Libraries/NewAppScreen';
import ESMSettingsScreen from '../views/ESMSettingsScreen/esmSettingsScreenView';
import HeaderSettings from '../components/headerSettings';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar} from 'react-native-elements';
const Stack = createStackNavigator();

const AppStack = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          headerTitle: () =>
            !showSearch ? (
              <Text style={{color: '#FFF', fontSize: 25, fontWeight: 'bold'}}>
                Tik n Talk
              </Text>
            ) : (
              <SearchBar
                placeholder="Search..."
                onChangeText={() => {}}
                containerStyle={{backgroundColor:"#FFF", height:40, marginRight:10, borderTopWidth:0, borderBottomWidth:0, borderRadius:30}}
                inputContainerStyle={{backgroundColor:"transperent", marginTop:-10}}
                inputStyle={{color:"#04BF9D"}}
                placeholderTextColor="#04BF9D"
                searchIcon={false}
                clearIcon={false}
                value={search}
              />
            ),
          headerBackground: () => (
            <LinearGradient colors={['#04D99D', '#04BF9D']} style={{flex: 1}} />
          ),
          headerRight: () => (
            <View style={{flex: 1, marginRight: 10, flexDirection: 'row'}}>
              <TouchableOpacity
                style={{padding: 15}}
                onPress={() => {
                  setShowSearch(!showSearch);
                }}>
                <Icon
                  name={!showSearch ? "search" : "times"}
                  size={20}
                  style={{fontWeight: '100'}}
                  color="#FFF"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{padding: 15}}
                onPress={() => {
                  null;
                }}>
                <Icon
                  name="ellipsis-v"
                  style={{fontWeight: '100'}}
                  size={20}
                  color="#FFF"
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen
        name="ESMSettings"
        options={{
          title: 'Settings',
          headerStyle: {backgroundColor: '#333', elevation: 0},
          headerTitleStyle: {color: '#fff'},
        }}
        component={ESMSettingsScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
