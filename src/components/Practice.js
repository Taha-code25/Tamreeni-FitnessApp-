import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Practice = ({
  inputContainer,
  label,
  placeholder,
  value,
  onChangeText,
  textStyles,
}) => {
  return (
    <View style={inputContainer}>
      <Text style={textStyles}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        style={style}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Practice;
