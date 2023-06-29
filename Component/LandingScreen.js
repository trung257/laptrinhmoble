import React from 'react';
import { Image, View, Text, Button, StyleSheet } from 'react-native';

const LandingScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://lun-us.icons8.com/a/twMTky7Sbk2wULK8Cjw4LA/7msU8S8htES0idZeOeDExw/icons8-restaurant-menu-101_2x.png' }}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Welcome to our restaurant</Text>
      <Text style={styles.descriptionText}>Order food and make reservations with one click.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} style={styles.loginButton} />
        <Button title="Sign Up" onPress={handleSignUp} style={styles.signUpButton} />
      </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 50,
  },
  welcomeText: {
    color: '#5EA33A',
    fontSize: 17,
    textAlign: 'center',
  },
  descriptionText: {
    color: '#4A4A4A',
    fontSize: 17,
    textAlign: 'left',
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  loginButton: {
    backgroundColor: '#5EA33A',
    color: '#FFFFFF',
    borderRadius: 4,
    width: 278,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    color: '#374B6D',
    borderRadius: 4,
    width: 278,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
  },
});
export default LandingScreen;