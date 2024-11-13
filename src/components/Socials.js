import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

const SocialButton = ({
  imageSource,
  buttonText,
  buttonStyle,
  textStyle,
  activeOpacity = 0.8,
}) => {
  return (
    <TouchableOpacity style={buttonStyle} activeOpacity={activeOpacity}>
      <Image
        source={imageSource}
        style={{height: 24, width: 24, marginRight: 14}}
      />
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;
