import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, Images, Fonts, General} from '../contants';
import {Display} from '../utils';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_BLACK}
        translucent
      />
      <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />
      <Text style={styles.titleText}>Vị Việt</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_BLACK,
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.POPPINS_BOLD,
  },
});
