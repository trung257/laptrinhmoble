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
        <View style={styles.loginButton}>
          <Button 
            title="Login" 
            color = "#5EA33A"
            onPress={handleLogin} />
        </View>
        <View style={styles.orContainer}>
          <Text style={styles.orText}>OR</Text>
        </View>
        <View style={styles.signUpButton}>
          <Button 
            title="Sign Up" 
            color = "#374B6D"
            onPress={handleSignUp} />
        </View>
      </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
    marginTop: -200,
  },
  welcomeText: {
    color: '#5EA33A',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  descriptionText: {
    color: '#4A4A4A',
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 70,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    maxWidth: 400,
    height: 200,
  },
  loginButton: {
    borderRadius: 20,
    width: '100%',
    height: 50,
  },
  orContainer: {
    color: '#5EA33A',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signUpButton: {
    borderRadius: 20,
    width: '100%',
    height: 50,
    marginBottom: 10,
  },
});
export default LandingScreen;