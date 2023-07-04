import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const goToHome = () => {
    if (email.trim() == '' || !email) {
      alert('Không được để trống email !');
    } else if (password.trim() == '' || !password) {
      alert('Không được để trống mật khẩu !');
    } else {
      login();
    }
  };
  const login = async () => {
    let userData = await AsyncStorage.getItem('userData');
    if (userData) {
      userData = JSON.parse(userData);
      let arr = [...userData];
      arr = arr.filter(
        (value) =>
          value.email.toLocaleLowerCase() == email.toLocaleLowerCase() &&
          value.password == password
      );
      if (arr.length > 0) {
        let curUser = arr[0];
        AsyncStorage.setItem('curUser', JSON.stringify(curUser));
        AsyncStorage.setItem('email', JSON.stringify(curUser.email));
        navigation.navigate('Home');
      } else alert('Email hoặc mật khẩu không chính xác!');
    } else {
      alert('Email hoặc mật khẩu không chính xác!');
    }
  };

  const handleFacebookLogin = async () => {
    
    navigation.navigate('Home');

  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Sign in</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.loginButton}>
          <Button 
            title="Login" 
            color = "#5EA33A"
            onPress={goToHome} />
      </View>
      <View>
          <Text style={styles.orText}>OR</Text>
      </View>
      <View style={styles.facebookButton}>
          <Button 
            title="Login with Facebook"  
            color = "#374B6D"
            onPress={handleFacebookLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#5EA33A',
    textAlign: 'left',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    paddingRight: 270,
    marginTop: -150,
    marginBottom: 100,
  },
  input: {
    width: 390,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#9B9B9B',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 40,
  },
  loginButton: {
    borderRadius: 50,
    width: 330,
    height: 50,
  },
  orText: {
    color: '#5EA33A',
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
  },
  facebookButton: {
    borderRadius: 50,
    width: 330,
    height: 50,
    marginBottom: 10,
  },
});

export default LoginScreen;