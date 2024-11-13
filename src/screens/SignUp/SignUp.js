import React, {useState} from 'react';
import Back from '../../components/Back';
import {useNavigation} from '@react-navigation/native';
import {Image, View, Text, TouchableOpacity, ScrollView} from 'react-native';

import CustomInput from '../../components/PracticeComponent';

const SignUp = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [tick, Showtick] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [Cpaswword, setCpassword] = useState('');
  const [CpasswordVisible, setCpasswordVisible] = useState(true);
  const [showError, setShowError] = useState({
    email: false,
    password: false,
    phoneNumber: false,
    Cpaswword: false,
    passwordValidation: false,
  });
  const [passwordValidation, setPasswordValidation] = useState(false);

  const navigation = useNavigation();
  const showPassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const showCpassword = () => {
    setCpasswordVisible(!CpasswordVisible);
  };
  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  console.log('Password', password);
  console.log('CPassword', Cpaswword);

  const submit = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedCPassword = Cpaswword.trim();
    const trimmedPhonenumber = phoneNumber.trim();
    setShowError({
      email: trimmedEmail === '' || !isValidEmail(trimmedEmail),
      phoneNumber: trimmedPhonenumber === '',
      password: trimmedPassword === '',
      Cpaswword: trimmedCPassword === '',
      passwordValidation: trimmedPassword !== trimmedCPassword,
      tickValidation: !tick,
    });
    if (
      trimmedEmail &&
      isValidEmail(trimmedEmail) &&
      trimmedPhonenumber &&
      trimmedPassword &&
      trimmedCPassword &&
      trimmedPassword === trimmedCPassword &&
      tick
    ) {
      navigation.navigate('Otp', {context: 'SignUp'});
    }
  };
  return (
    <ScrollView
      style={{marginTop: 50, marginHorizontal: 12}}
      showsVerticalScrollIndicator={false}>
      <Back onPress={() => navigation.navigate('SignIn')} />
      <View style={{alignItems: 'center', marginTop: 8}}>
        <Image
          source={require('../../components/Assets/main.png')}
          style={{height: 80, width: 120}}
        />
      </View>
      <Text
        style={{
          marginTop: 16,
          fontSize: 16,
          fontWeight: '600',
          fontFamily: 'Poppins-Regular',
        }}>
        Sign Up
      </Text>
      <Text style={{marginTop: 4, color: '#999999'}}>
        Please enter your details to create an account
      </Text>
      <Text
        style={{
          marginTop: 14,
          color: '#999999',
          marginBottom: 8,
          marginVertical: 8,
        }}>
        Email Address<Text style={{color: '#06C3A5'}}>*</Text>
      </Text>

      <CustomInput
        value={email}
        onChangeText={setEmail}
        keyboardType={'email'}
        label={'Email address'}
        errorMessage={showError.email ? 'Please enter a valid email' : null}
        isEmail={true}
      />
      <View
        style={{
          flexDirection: 'row',
          marginRight: 4,
          marginVertical: 8,
          marginTop: 12,
        }}>
        <Text style={{color: '#999999', marginRight: 4, marginVertical: 8}}>
          Phone Number
        </Text>
        <Text style={{color: '#06C3A5'}}>*</Text>
      </View>

      <CustomInput
        value={phoneNumber}
        onChangeText={setphoneNumber}
        label={'Phone number'}
        keyboardType={'number-pad'}
        errorMessage={
          showError.phoneNumber ? 'Please enter correct phone number' : null
        }
      />
      <Text style={{color: '#999999', marginRight: 4, marginVertical: 8}}>
        Password <Text style={{color: '#06C3A5'}}>*</Text>
      </Text>
      <CustomInput
        value={password}
        onChangeText={setPassword}
        label={'Password'}
        secureTextEntry={passwordVisible}
        errorMessage={showError.password ? 'Please enter your password' : null}
      />

      <Text style={{color: '#999999', marginRight: 4, marginVertical: 8}}>
        Confirm Password <Text style={{color: '#06C3A5'}}>*</Text>
      </Text>
      <CustomInput
        value={Cpaswword}
        onChangeText={setCpassword}
        label={'Confirm password'}
        errorMessage={
          showError.passwordValidation ? 'Passwords do not match.' : null
        }
        secureTextEntry={passwordVisible}
        isPassword={true}
        value1={password} // Original password for comparison
      />

      <View style={{flexBasis: 'row'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: tick ? '#06C3A5' : 'red',
              marginTop: 12,
              marginLeft: 4,
              width: 22,
              height: 22,
              backgroundColor: tick ? '#06C3A5' : null,
              borderRadius: 7,
            }}
            onPress={() => {
              Showtick(!tick);
            }}
            activeOpacity={0.8}>
            {tick && (
              <Image
                source={require('../../components/Assets/tick.png')}
                style={{height: 20, width: 20}}
              />
            )}
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 16,
              fontSize: 14,
              marginLeft: 10,
              color: '#999999',
            }}>
            By creating an account you agree to our{' '}
            <Text
              onPress={() => navigation.navigate('TermsAndConditions')}
              style={{color: '#06C3A5'}}>
              Terms and Conditions
            </Text>{' '}
            and{' '}
            <Text
              onPress={() => navigation.navigate('PrivacyPolicy')}
              style={{color: '#06C3A5'}}>
              Privacy Policy
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 15,
            alignItems: 'center',
            backgroundColor: '#06C3A5',
            paddingVertical: 16,
            borderRadius: 14,
          }}
          activeOpacity={0.8}
          onPress={() => {
            submit();
          }}>
          <Text style={{color: '#FFFFFF'}}>Create Account</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={{fontFamily: 'Poppins-Regular'}}>
            Already have an account?{' '}
            <Text
              style={{color: '#06C3A5'}}
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
