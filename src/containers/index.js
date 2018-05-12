import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SideMenu from 'react-native-side-menu';

const window = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  _toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  _updateMenuState = (isOpen) => {
    this.setState({ isOpen });
  }

  render() {
    const menu = <Menu />;

    return (
      <View style={styles.container}>
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={isOpen => this._updateMenuState(isOpen)}
        >
          <View>
            <Text>i'm the content</Text>
          </View>
          <TouchableOpacity
            onPress={this._toggle}
            style={styles.button}
          >
            <Text>Toggle</Text>
          </TouchableOpacity>
        </SideMenu>
      </View>
    );
  }
}

class Menu extends Component {
    render() {
      return (
        <ScrollView scrollsToTop={false} style={styles.menu}>
          <View>
            <Text>item1</Text>
          </View>
          <View>
            <Text>item2</Text>
          </View>
          <View>
            <Text>item3</Text>
          </View>
        </ScrollView>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  }
});
