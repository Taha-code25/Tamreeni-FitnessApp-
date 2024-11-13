import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from '../screens/SignIn/SignInStyles';
const EmailInput = ({placeholder, email, setEmail}) => {
  return (
    <View style={styles.userNameView}>
      <TextInput
        placeholder={placeholder}
        style={[styles.inputBox, {paddingVertical: 16}]}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
    </View>
  );
};

export default EmailInput;
