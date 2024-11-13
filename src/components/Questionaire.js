import React, {useState} from 'react';
import {Dimensions, ImageBackground, View} from 'react-native';

const Questionaire = () => {
  const [currentId, setCurrentId] = useState(1);
  const {height, width} = Dimensions.get('window');
  switch (currentId) {
    case 1:
      return (
        <View>
          <ImageBackground></ImageBackground>
        </View>
      );
  }
};

export default Questionaire;
