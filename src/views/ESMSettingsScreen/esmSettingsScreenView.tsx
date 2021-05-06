import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  Button,
  View,
  Alert,
  Dimensions,
  StyleSheet,
  PixelRatio,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

const ESMSettingsScreen = ({ route }) => {
  console.log('params', route.params.row);

  const navigation = useNavigation();

  useEffect(() => {

  }, []);


  return (
    <SafeAreaView>
      <View>
        <Text>{route.params.row.name}</Text>
        <Button
          title={`Enable ESM for ${route.params.row.name}` }
          color="#333"
          onPress={() =>
            navigation.navigate('Home', { name: 'Jane' })
          }
        />
      </View>
    </SafeAreaView>

  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
  },
});

export default ESMSettingsScreen;
