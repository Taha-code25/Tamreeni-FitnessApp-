import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../screens/Account/Style';

const Auth = () => {
  const {
    inputView,
    inputText,
    userNameView,
    inputBox,
    PasswordView,
    closedEye,
    forgot,
    signStyles,
  } = styles;
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const showPassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submit = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    if (trimmedEmail === '' || trimmedPassword === '') {
      Alert.alert('Invalid email or password!');
    } else if (!isValidEmail(trimmedEmail)) {
      Alert.alert('Please enter a valid email address');
    } else {
      Alert.alert('Signed In');
    }
    setEmail('');
    setPassword('');
  };
  return (
    <View>
      {' '}
      {/* Add a parent container here */}
      <View style={inputView}>
        <Text style={inputText}>Username or email address</Text>
        <View style={userNameView}>
          <TextInput
            placeholder="Enter username or email"
            style={inputBox}
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text style={inputText}>Password</Text>
          <View style={PasswordView}>
            <TextInput
              placeholder="Enter your password"
              style={inputBox}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={passwordVisible}
              maxLength={12}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => showPassword()}>
              <Image
                source={require('./Assets/Eye-Closed.png')}
                style={closedEye}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={signStyles}
        activeOpacity={0.8}
        onPress={() => submit()}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;
