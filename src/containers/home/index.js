import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  _renderHeader() {
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.tate.scrollY}}}]
          )}
        >
          {this._renderHeader()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
