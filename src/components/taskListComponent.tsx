import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Header, Overlay, ListItem, Avatar} from 'react-native-elements';
import {TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ListData} from './../types';
import {CheckBox} from 'react-native-elements';
import {Dimensions} from 'react-native';

interface IListComponentProps {
  row: ListData;
}

const ContentComponent = ({content, checked}) => {
  return (
    <View>
      <Text
        style={
          checked
            ? {
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
                color: '#28803B',
              }
            : {
                color: '#000000',
              }
        }>
        {content}
      </Text>
      <Text
        style={
          checked
            ? {
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
                color: '#28803B',
              }
            : {
                color: '#000000',
              }
        }>
        {content}
      </Text>
    </View>
  );
};
export default function TaskListComponent({row}: IListComponentProps) {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  return (
    <View>
      <ListItem
        Component={TouchableHighlight}
        containerStyle={{}}
        disabledStyle={{opacity: 0.5}}
        onLongPress={() => {}}
        // onPress={() => navigation.navigate('Chat', {row})}
        pad={20}
        topDivider>
        <ListItem.Content>
          <CheckBox
            title={<ContentComponent content={row.name} checked={checked} />}
            textStyle={
              checked
                ? {
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    color: '#28803B',
                  }
                : null
            }
            wrapperStyle={{width: windowWidth - 60}}
            style={{width: 100}}
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
          {/* <ListItem.Title>
            <Text>{row.name}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>{row.lastMessage}</Text>
          </ListItem.Subtitle> */}
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
}
