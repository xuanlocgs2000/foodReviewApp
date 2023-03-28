import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../contants';

const constainerStyle = (size )=> ({
  backgroundColor: Colors.LIGHT_PINK2,
  height: 32 * size,
  width: 64 * size,
  borderRadius: 32 * size,
  padding: 4 * size,
});
const toggleStyle = size => ({
  height: 24 * size,
  width: 24 * size,
  backgroundColor: Colors.DEFAULT_WHITE,
  borderRadius: 32 * size,
});
//custom lai tooggle
const ToggleButton = ({size}) => {
  return (
    <View style={constainerStyle(size)}>
      <View style={toggleStyle(size)}></View>
    </View>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_PINK2,
    height: 32,
    width: 64,
    borderRadius: 32,
    padding: 4,
  },
  toggle: {
    height: 24,
    width: 24,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 32,
  },
});
