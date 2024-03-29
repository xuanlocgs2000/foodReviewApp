import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../contants';

const constainerStyle = (size, isActive) => ({
  backgroundColor: isActive ? Colors.LIGHT_PINK2 : Colors.DEFAULT_GREY,
  height: 32 * size,
  width: 64 * size,
  borderRadius: 32 * size,
  padding: 4 * size,
});
const toggleStyle = (size, animatedValue) => ({
  height: 24 * size,
  width: 24 * size,
  backgroundColor: Colors.DEFAULT_WHITE,
  borderRadius: 32 * size,
  transform: [
    {
      translateX: animatedValue,
    },
  ],
});
//custom lai tooggle
const ToggleButton = ({size}) => {
  const [isActive, setIsActive] = useState(false);
  const [animatedValue, setAnimationValue] = useState(new Animated.Value(0));
  const toggleHandle = () => {
    Animated.timing(animatedValue, {
      toValue: isActive ? 0 : 32 * size,
      duration: 250,
      easing: Easing.bounce,
      delay: 0,
      useNativeDriver: true,
    }).start();
    setIsActive(!isActive);
  };
  return (
    <TouchableOpacity
      style={constainerStyle(size, isActive)}
      onPress={() => toggleHandle()}
      activeOpacity={0.8}>
      <Animated.View style={toggleStyle(size, animatedValue)} />
    </TouchableOpacity>
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
