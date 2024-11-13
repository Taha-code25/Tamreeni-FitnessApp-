import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Options = ({text, selectedOption, isSelected}) => {
  return (
    <TouchableOpacity
      style={[style.btn, {borderColor: isSelected ? '#06C3A5' : '#999999'}]}
      onPress={selectedOption} // Call the selectedOption function on press
    >
      <Text
        style={{
          alignSelf: 'center',
          color: isSelected ? '#06C3A5' : '#999999', // Change color based on selection
          fontFamily: 'Poppins-Regular',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btn: {
    marginHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 50,
    borderWidth: 0.75,
    marginVertical: 8,
  },
});

export default Options;
