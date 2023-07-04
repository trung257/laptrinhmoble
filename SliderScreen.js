// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const SliderScreen = ({ navigation }) => {
  const onDone = () => {
    
    navigation.navigate('Landing');
  };

  const onSkip = () => {
    
    navigation.navigate('Landing');
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          height: 10,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 120,
          
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introChudeStyle}>{item.chude}</Text>
        <Text style={styles.introMieutaStyle}>{item.mieuta}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={false}
          showNextButton={false}
          onSkip={onSkip}
        />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 100,
    height: 100,
    marginBottom: 50,
    
  },
  introChudeStyle: {
    fontSize: 20,
    fontStyle: 'normal',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    
  },
  introMieutaStyle: {
    fontSize: 17,
    fontStyle: 'italic',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const slides = [
  {
    key: 's1',
    image: {
      uri:
        'https://cdn-eu.icons8.com/gB4NBrkEb0m7TxOo4wtFKg/6WmYEOQdykGE-1SGLWnMTA/icons8-restaurant-menu-101_2x.png',
    },
    chude: 'Browse Food',
    mieuta:'Welcome to our restaurant app! Log in and check out our delicious food.',
    backgroundColor: '#5EA33A',
    StatusBar: true,
  },

  {
    key: 's2',
    image: {
      uri:
        'https://cdn-eu.icons8.com/gB4NBrkEb0m7TxOo4wtFKg/N9xS_KASKEOw6qUVNF5Wnw/icons8-delivery-500_2x.png',
    },
    chude: 'Order Food',
    mieuta:'Hungry? order food in just a few clicks and we`ll take care of you..',
    backgroundColor: '#5EA33A',
    StatusBar: true,
  },
  {
    key: 's3',
    image: {
      uri:
        'https://cdn-eu.icons8.com/gB4NBrkEb0m7TxOo4wtFKg/n4xLeSRUNkGjtriqoR0Tgg/noun_Calendar_2442157_2x.png',
    },
    chude: 'Make Reservations',
    mieuta:'Book a table in advance to avoid waiting in line',
    backgroundColor: '#5EA33A',
    StatusBar: true,
  },
  {
    key: 's4',
    image: {
      uri:
        'https://cdn-eu.icons8.com/gB4NBrkEb0m7TxOo4wtFKg/m1iqE2DI2EOO0FfVl6J-xQ/noun_Binoculars_1107295_2x.png',
    },
    chude: 'Quick Search',
    mieuta:'Quickly find food items you like the most',
    backgroundColor: '#5EA33A',
    StatusBar: true,
  },
  {
    key: 's5',
    image: {
      uri:
        'https://cdn-eu.icons8.com/gB4NBrkEb0m7TxOo4wtFKg/6xToiHwNO02WCt12-ZwhjQ/noun_mac_2076879_2x.png',
    },
    chude: 'Apple Pay',
    mieuta:'We know you`re busy, so you can pay with your phone in just one click',
    backgroundColor: '#5EA33A',
    StatusBar: true,
  },
];
export default SliderScreen;