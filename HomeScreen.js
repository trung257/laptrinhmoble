import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    useEffect(() =>{
        AsyncStorage.getItem('email').then(result =>{
            setEmail(result);
        });
    });

    const onLogout = () => {
        AsyncStorage.clear();
        navigation.replace('Login');
    };
    return (
        <View>
            <View>
                <Text style={{
                    marginVertical: 20,
                    paddingLeft: 20,
                    fontSize: 24,
                    }}>Xin chào, {email}</Text>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            }}>
                <TouchableOpacity 
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingVertical: 10,
                        backgroundColor: "#2FDBBC",
                        borderRadius: 100,
                        width: 100,
                    }}
                    onPress={onLogout}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 16
                        }}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
  };

export default HomeScreen;