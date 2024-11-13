import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../screens/Account/Style';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const Button = ({onPress}) => {
  const Navigation = useNavigation();
  const {btnStyle} = styles;
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} style={btnStyle} onPress={onPress}>
        <Text style={{color: 'white'}}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
