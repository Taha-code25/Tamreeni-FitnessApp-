import React, {useState} from 'react';
import Back from '../../components/Back';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import PasswordInput from '../../components/Password';
import style from './ResetStyles';
import CustomInput from '../../components/PracticeComponent';

const ResetPassword = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [CPassword, setCpassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [CPasswordVisible, setCpasswordVisible] = useState(true);
  const [showError, setShowError] = useState({
    password: false,
    CPassword: false,
    PasswordValidation: false,
  });

  const showPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const showCPassword = () => {
    setCpasswordVisible(!CPasswordVisible);
  };

  const submit = () => {
    const trimmedPassword = password.trim();
    const trimmedCpassword = CPassword.trim();
    setShowError({
      password: trimmedPassword === '',
      CPassword: trimmedCpassword === '',
      PasswordValidation: trimmedPassword !== trimmedCpassword,
    });
    if (
      trimmedPassword &&
      trimmedCpassword &&
      trimmedPassword === trimmedCpassword
    ) {
      Alert.alert('Password was changed!');
    }
  };

  return (
    <View style={{marginTop: 40, marginHorizontal: 12}}>
      <Back onPress={() => navigation.navigate('Otp')} />
      <View style={style.mainContainer}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Poppins-Regular',
          }}>
          Reset Password
        </Text>
        <Text
          style={{
            marginTop: 8,
            color: '#86868A',
            fontWeight: '400',
            fontFamily: 'Poppins-Regular',
          }}>
          Your new password must be different from the previously used password
        </Text>
        <View style={{marginVertical: 20}}>
          <CustomInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={passwordVisible}
            text={'Password'}
          />
        </View>
        <CustomInput
          label={'confirm password'}
          value={CPassword}
          onChangeText={setCpassword}
          secureTextEntry={passwordVisible}
          text={'Confirm Password'}
          isPassword={true}
          value1={password}
        />

        <TouchableOpacity style={style.ResetBtn} onPress={submit}>
          <Text style={{color: '#FFFFFF', fontFamily: 'Poppins-Regular'}}>
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;
