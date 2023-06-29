import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, HeaderBackButton } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  const handleLogin = () => {
    // Xử lý đăng nhập
    navigation.navigate('Home');
  };

  const handleFacebookLogin = () => {
    // Xử lý đăng nhập bằng Facebook
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <HeaderBackButton onPress={() => navigation.navigate('Landing')} />
      <Text style={styles.title}>Sign in</Text>
      <TextInput style={styles.input} placeholder="Email or phone number" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <Button title="Log in" onPress={handleLogin} style={styles.button} />
      <Button title="Facebook login" onPress={handleFacebookLogin} style={styles.facebookButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#5EA33A',
    textAlign: 'left',
    paddingLeft: 20,
    marginTop: 50,
    marginBottom: 30,
  },
  input: {
    width: 323,
    height: 53,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    color: '#9B9B9B',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: 278,
    height: 53,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#5EA33A',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  facebookButton: {
    width: 278,
    height: 53,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#344D91',
    color: '#FFFFFF',
    marginBottom: 20,
  },
});

export default LoginScreen;