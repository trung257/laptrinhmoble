import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation, HeaderBackButton } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateFullName = (fullName) => {
    const fullNameRegex = /^[a-zA-Z\s]*$/;
    return fullNameRegex.test(fullName);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10,11}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,23}$/;
    return passwordRegex.test(password);
  };

  const storeData = async () => {
    try {
      const user = {
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      };
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {
      console.error(e); 
      Alert.alert('Lưu trữ dữ liệu thất bại'); 
    }
  };

  const handleSignUp = () => {
    let valid = true;

    if (!validateFullName(fullName)) {
      setError('Invalid full name');
      valid = false;
    } else if (!validatePhoneNumber(phoneNumber)) {
      setError('Invalid phone number');
      valid = false;
    } else if (!validateEmail(email)) {
      setError('Invalid email address');
      valid = false;
    } else if (!validatePassword(password)) {
      setError('Invalid password');
      valid = false;
    } else {
      setError('');
    }

    if (valid) {
      Alert.alert('Tạo tài khoản thành công!');
      storeData();
      navigation.navigate('Login');
    } else {
      Alert.alert('Thông tin đăng ký không hợp lệ!');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderBackButton onPress={() => navigation.navigate('Landing')} />
      <Text style={styles.title}>Create new account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={fullName}
        onChangeText={(value) => {
          if (validateFullName(value)) {
            setFullName(value);
          }
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        value={phoneNumber}
        onChangeText={(value) => {
          if (validatePhoneNumber(value)) {
            setPhoneNumber(value);
          }
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={(value) => {
          if (validateEmail(value)) {
            setEmail(value);
          }
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(value) => {
          if (validatePassword(value)) {
            setPassword(value);
          }
        }}
        secureTextEntry={true}
      />
      <Button title="Sign up" onPress={handleSignUp} style={styles.button} />
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
    height: 38,
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
    height: 38,
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

export default SignUpScreen;