import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation, HeaderBackButton } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('my-key', value);
    } catch (e) {
      // saving error
    }
  };

  const handleSignUp = () => {
    // Xử lý đăng ký
    Alert.alert('Tạo tài khoản thành công !');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <HeaderBackButton onPress={() => navigation.navigate('Landing')} />
      <Text style={styles.title}>Create new account</Text>
      <TextInput style={styles.input} placeholder="Full name" />
      <TextInput style={styles.input} placeholder="Phone number" />
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
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