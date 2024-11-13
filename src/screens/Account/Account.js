import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './Style';
import Button from '../../components/Button';
import Langauges from '../../components/Languages';
const Account = ({navigation}) => {
  const {image, container, textStyles} = styles;
  return (
    <View style={container}>
      <Image
        source={require('../../components/Assets/Layer_1.png')}
        style={image}
      />
      <Text style={textStyles}>Choose Your Preferred Language</Text>
      <Langauges />
      <Button onPress={() => navigation.navigate('GetStarted')} />
    </View>
  );
};
export default Account;
