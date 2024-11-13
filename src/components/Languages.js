import React, {useState} from 'react';
import styles from '../screens/Account/Style';
import {View, TouchableOpacity, Text} from 'react-native';

const Languages = () => {
  const {
    listContainer,
    listBox1,
    listBox2,
    selectedToggleBtn,
    DefaultTogglebtn,
    selectedIn,
    innerText,
  } = styles;
  const [button, selectedButton] = useState(null);

  const onSelection = button => {
    selectedButton(button);
  };
  return (
    <View style={listContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onSelection('button1')}
        style={button === 'button1' ? listBox2 : listBox1}>
        <Text style={innerText}>Hello</Text>
        <View
          style={button === 'button1' ? selectedToggleBtn : DefaultTogglebtn}>
          <View
            style={button === 'button1' ? selectedIn : DefaultTogglebtn}></View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onSelection('button2')}
        style={button === 'button2' ? listBox2 : listBox1}>
        <Text style={innerText}>مرحبا</Text>
        <View
          style={button === 'button2' ? selectedToggleBtn : DefaultTogglebtn}>
          <View
            style={button === 'button2' ? selectedIn : DefaultTogglebtn}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Languages;
