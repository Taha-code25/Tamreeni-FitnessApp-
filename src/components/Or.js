import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Or = () => {
  const style = StyleSheet.create({
    or: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
    },
    View1: {
      flex: 1, // Line takes up the available space
      height: 1, // Line thickness
      backgroundColor: '#999999', // Line color (black)
    },
    text: {
      color: '#999999',
      fontSize: 16,
    },
  });
  return (
    <View style={style.or}>
      <View style={style.View1}></View>
      <Text style={style.text}>or</Text>
      <View style={style.View1}></View>
    </View>
  );
};

export default Or;
