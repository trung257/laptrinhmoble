import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, HeaderBackButton } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState(''); 
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const user = JSON.parse(value);
        if ((user.email === emailOrPhoneNumber || user.phoneNumber === emailOrPhoneNumber) && user.password === password) {
          Alert.alert('Đăng nhập thành công!');
          navigation.navigate('Home');
        } else {
          console.log('Thông tin đăng nhập không đúng');
          Alert.alert('Thông tin đăng nhập không đúng!');
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        console.log('Đăng nhập bằng Facebook bị hủy bỏ');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
          console.log('Không lấy được token từ Facebook');
        } else {
          const response = await fetch(`https://graph.facebook.com/me?access_token=${data.accessToken}`);
          const userData = await response.json();
          await AsyncStorage.setItem('user', JSON.stringify(userData));
          navigation.navigate('Home');
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleEmailOrPhoneNumberChange = (text) => {
    if (/^\d+$/.test(text)) {
      // Nếu text chỉ chứa các số, đây có thể là số điện thoại
      setEmailOrPhoneNumber(text);
    } else {
      // Nếu text không chỉ chứa các số, đây có thể là email
      setEmailOrPhoneNumber(text.toLowerCase());
    }
  };

  return (
    <View style={styles.container}>
      <HeaderBackButton onPress={() => navigation.navigate('Landing')} />
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        style={styles.input}
        placeholder="Email or phone number"
        value={emailOrPhoneNumber}
        onChangeText={handleEmailOrPhoneNumberChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Log in" onPress={handleLogin} style={styles.button} />
      <Button
        title="Facebook login"
        onPress={handleFacebookLogin}
        style={styles.facebookButton}
      />
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