import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Actions, Stack, Tabs } from 'react-native-router-flux';
import TabView from './components/TabView';
import TabIcon from './components/TabIcon';

export default class App extends React.Component {

  onBackPress() {
    if (Actions.state.index !== 0) {
      return false
    }
    Actions.pop();
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Router backAndoidHandler={this.onBackPress}>
          <Stack key="root" hideNavBar={true}>
            <Tabs key="tabView" swipeEnabled tabBarPosition={"bottom"} showLabel={false}>
              <Stack key="tab_home">
                <Scene key={"home"} component={TabView} title={"首页"} icon={TabIcon}/>
              </Stack>
              <Stack key="tab_me">
                <Scene key={"me"} component={TabView} title={"我的"} icon={TabIcon} />
              </Stack>
            </Tabs>
          </Stack>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
