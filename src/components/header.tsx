import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {Header, Overlay, ListItem, Avatar} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../navigation/authProvider';

const menuList = [
  {
    name: 'Logout',
  },
];

export default () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const showSettings = () => {
    setVisibleMenu(!visibleMenu);
  };

  const {logout} = useContext(AuthContext);
  return (
    <>
      <Overlay
        isVisible={visibleMenu}
        overlayStyle={{width: 250, backgroundColor: '#333', top: 0}}
        backdropStyle={{opacity: 0}}
        onBackdropPress={showSettings}>
        <View>
          {menuList.map((l, i) => (
            <ListItem
              key={i}
              onPress={() => {
                logout();
              }}
              bottomDivider
              containerStyle={{
                height: 40,
                backgroundColor: '#333',
                borderBottomWidth: 0,
              }}>
              <ListItem.Content>
                <ListItem.Title style={{color: '#fff'}}>
                  {l.name}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </Overlay>
      {/* <LinearGradient colors={['#04BF9D', '#333333']} > */}
        <Header
        //   backgroundImageStyle={{}}
          style={{}}
          barStyle="default"
          centerComponent={{
            text: 'Tik n Talk',
            style: {color: '#fff', fontWeight: 'bold', fontSize: 24},
          }}
          centerContainerStyle={{}}
          containerStyle={{
            // borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            // backgroundColor: '#333',
          }}
          leftContainerStyle={{}}
          placement="left"
          rightComponent={{
            icon: 'more-vert',
            color: '#fff',
            onPress: () => showSettings(),
          }}
          rightContainerStyle={{marginRight: 10}}
        //   statusBarProps={{backgroundColor: 'transperent'}}
        />
      {/* </LinearGradient> */}
    </>
  );
};
