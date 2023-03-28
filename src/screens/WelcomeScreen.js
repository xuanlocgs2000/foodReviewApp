import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Colors, Images, Fonts, General} from '../contants';
import {FlatList} from 'react-native-gesture-handler';
import {WelcomeCard, Separator} from '../components';
import {Display} from '../utils';
import SigninScreen from './SigninScreen';

const pageStyle = isActive =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Colors.DEFAULT_GREY};

const Pagination = ({index}) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i}></View>
        ) : (
          <View style={pageStyle(false)} key={i}></View>
        ),
      )}
      {/* <View style={pageStyle(true)}></View>
      <View style={pageStyle(true)}></View> */}
    </View>
  );
};

const WelcomeScreen = ({navigation}) => {
  const [welcomeListIndex, setWelcomListindex] = useState(0);
  const welcomeList = useRef();
  const OnViewRef = useRef(({changed}) => {
    setWelcomListindex(changed[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
  const pageScroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent={true}
      />
      <Separator height={StatusBar.currentHeight} />
      <Separator height={Display.setHeight(8)} />
      <View style={styles.welcomListContainer}>
        <FlatList
          ref={welcomeList}
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={OnViewRef.current}
          pagingEnabled // gioi han luot flastlist
          renderItem={({item}) => <WelcomeCard {...item} />}
        />
      </View>
      <Separator height={Display.setHeight(8)} />
      <Pagination index={welcomeListIndex} />
      <Separator height={Display.setHeight(8)} />
      {welcomeListIndex === 2 ? (
        <TouchableOpacity
          style={styles.getingStartedButton}
          activeOpacity={0.8}
          onPress={()=>navigation.navigate('Signin')}>
          <Text style={styles.getingStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            activeOpacity={0.8}
            onPress={() => welcomeList.current.scrollToEnd()}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => pageScroll()}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.LIGHT_PINK,
    borderRadius: 32,
    marginHorizontal: 5,
  },
  welcomListContainer: {
    height: Display.setHeight(60),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 16 * 1.4,
    color: Colors.DEFAULT_GREY,
  },
  button: {
    backgroundColor: Colors.LIGHT_PINK,
    paddingVertical: 10,
    paddingHorizontal: 21,
    borderRadius: 32,
  },
  getingStartedButton: {
    backgroundColor: Colors.LIGHT_PINK,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignContent: 'center',
    elevation: 2,
  },
  getingStartedButtonText: {
    fontSize: 20,
    color: Colors.SECONDARY_WHITE,
    lineHeight: 20 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});
