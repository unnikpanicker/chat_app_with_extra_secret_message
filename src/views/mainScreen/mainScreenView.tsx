import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ListScreen from './../listScreen/listScreenView';
import TaskScreen from './../taskScreen/taskScreenView';

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  talk: ListScreen,
  tik: TaskScreen,
});

const renderTabBar = (props) => (
  <LinearGradient colors={['#04BF9D', '#04BF9D']} style={{}}>
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      style={{backgroundColor: 'transperent'}}
    />
  </LinearGradient>
);

export default function MainScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'talk', title: 'Talk'},
    {key: 'tik', title: 'Tik'},
  ]);

  return (
    <>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor={'transparent'} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  scene: {
    flex: 1,
  },
});
