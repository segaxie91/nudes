import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const propTypes = {
  name: PropTypes.string,
  sceneStyle: ViewPropTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'transparent',
    // borderWidth: 2,
    // borderColor: 'red',
  }
});

class TabView extends React.Component {
  state = {hideNavBar: false};

  toggleNavBar = () => {
    this.setState({hideNavBar: !this.state.hideNavBar}, () => {
      Actions.refresh({hideNavBar: this.state.hideNavBar})
    });
  };

  render() {
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
        <Button onPress={() => {this.toggleNavBar();}}>Toggle NavBar</Button>
      </View>
    )
  }
}

TabView.propTypes = propTypes;

export default TabView;