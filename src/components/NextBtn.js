import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import style from '../screens/Questionannaires/style';

const NextBtn = ({text, onPress}) => {
  return (
    <View style={{marginTop: 20}}>
      <TouchableOpacity style={style.btnStyles} onPress={onPress}>
        <Text style={{color: 'white', fontFamily: 'Poppins-Regular'}}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextBtn;
