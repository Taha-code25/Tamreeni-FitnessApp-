import React, {useState} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

const CustomInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  value1,
  value2,
  isEmail,
  isPassword,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(secureTextEntry);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const isValidEmail = text => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };

  // Input validation function
  const inputValidation = text => {
    if (!text) {
      setErrorMessage(`${label} can't be empty.`);
    } else if (isEmail && !isValidEmail(text)) {
      setErrorMessage('Invalid email');
    } else if (isPassword && text !== value1) {
      // Check if it's confirm password
      setErrorMessage('Passwords do not match.');
    } else {
      setErrorMessage('');
    }
    onChangeText(text);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={text => inputValidation(text)}
          secureTextEntry={passwordVisible}
          keyboardType={keyboardType}
          placeholder={label}
          autoCapitalize="none"
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={
                passwordVisible
                  ? require('../components/Assets/Eye-Closed.png')
                  : null
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    paddingHorizontal: 14,
    backgroundColor: '#EEEEEE',
    marginTop: 4,
  },
  input: {
    flex: 1,
    height: 45,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default CustomInput;
