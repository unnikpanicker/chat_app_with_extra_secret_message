import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  FlatList
} from 'react-native';
const {width, height} = Dimensions.get('window');
import { listData } from '../../service/data';
import TaskListComponent from '../../components/taskListComponent';
import LinearGradient from 'react-native-linear-gradient';

const TaskScreen = () => {
  return (
    <View style={styles.container}>
      
      <FlatList
        data={listData}
        renderItem={({item}) =><TaskListComponent row={item}/>}
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

export default TaskScreen;
