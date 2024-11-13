import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from '../screens/GetStarted/GetStartedStyles';
const Back = ({onPress, containerStyle, tintColor}) => {
  const Navigation = useNavigation();
  return (
    <View style={{flex: 1, padding: 10}}>
      <TouchableOpacity style={containerStyle} onPress={onPress}>
        <Image
          source={require('../components/Assets/arrow.png')}
          style={{
            height: 24,
            width: 24,
            tintColor: tintColor,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Back;
