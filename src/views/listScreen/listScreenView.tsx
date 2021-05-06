import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  FlatList
} from 'react-native';
const {width, height} = Dimensions.get('window');
import { listData } from '../../service/data';
import ListComponent from '../../components/listComponent';
import LinearGradient from 'react-native-linear-gradient';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      
      <FlatList
        data={listData}
        renderItem={({item}) =><ListComponent row={item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
     flex: 1
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default ListScreen;
