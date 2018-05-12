import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../styles/color';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ccc',
  },
  text: {

  }
});

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => {
  let iconName = 'home';
  if (props.title === '主页') {
    iconName = 'home';
  } else if (props.title === '关注') {
    iconName = 'heart';
  } else if (props.title === '资讯') {
    iconName = 'envelope';
  } else if (props.title === '我') {
    iconName = 'user';
  }
  const color = props.focused ? Color.tabSelected : 'black';
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={24} color={color}/>
      <Text style={[styles.text, {color: color}]}>
        {props.title}
      </Text>
    </View>
  )
};

TabIcon.propTypes = propTypes;

export default TabIcon;