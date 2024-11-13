import React, {useEffect, useRef, useState} from 'react';
import Back from '../../components/Back';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import style from './OtpStyles';

const Otp = () => {
  const I1 = useRef(null);
  const I2 = useRef(null);
  const I3 = useRef(null);
  const I4 = useRef(null);

  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [count, setCount] = useState(60);

  const navigation = useNavigation();
  const route = useRoute();
  const email = route.params?.email;
  const context = route.params?.context;

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval);
      } else {
        setCount(prevCount => prevCount - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  const handleOtpVerification = () => {
    if (context === 'ForgotPassword') {
      navigation.navigate('ResetPassword');
    } else if (context === 'SignUp') {
      navigation.navigate('ProfileSetup');
    }
  };

  const handleBackBtn = () => {
    if (context === 'SignUp') {
      navigation.navigate('SignUp');
    } else {
      navigation.navigate('ForgotPassword');
    }
  };

  return (
    <View style={style.mainContainer}>
      <Back onPress={handleBackBtn} />
      <View style={style.otpContainer}>
        <Text style={style.MainText}>OTP Verification</Text>

        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: '#999999',
            marginTop: 8,
            lineHeight: 17,
          }}>
          Please enter the OTP you received to {email} & +972********
        </Text>
      </View>
      <View style={style.otpView}>
        <TextInput
          ref={I1}
          placeholder="-"
          keyboardType="numeric"
          maxLength={1}
          value={f1}
          style={style.otpBox}
          onChangeText={text => {
            setF1(text);
            if (text.length >= 1) {
              I2.current?.focus();
            }
          }}
        />
        <TextInput
          ref={I2}
          placeholder="-"
          keyboardType="numeric"
          style={style.otpBox}
          value={f2}
          maxLength={1}
          onChangeText={text => {
            setF2(text);
            if (text.length === 1) {
              I3.current?.focus();
            } else if (text.length < 1) {
              I1.current.focus();
            }
          }}
        />
        <TextInput
          ref={I3}
          placeholder="-"
          keyboardType="numeric"
          style={style.otpBox}
          value={f3}
          maxLength={1}
          onChangeText={text => {
            setF3(text);
            if (text.length === 1) {
              I4.current?.focus();
            } else if (text.length < 1) {
              I2.current.focus();
            }
          }}
        />
        <TextInput
          ref={I4}
          placeholder="-"
          keyboardType="numeric"
          style={style.otpBox}
          value={f4}
          maxLength={1}
          onChangeText={text => {
            setF4(text);
            if (text.length === 1) {
              I4.current.focus();
            } else if (text.length < 1) {
              I3.current.focus();
            }
          }}
        />
      </View>
      <View
        style={{
          marginVertical: 14,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text>Expires in: </Text>
        <Text style={{fontWeight: '600', color: '#06C3A5'}}>{count}</Text>
      </View>
      {f1 === '' && f2 === '' && f3 === '' && f4 === '' ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Didn’t receive code?</Text>
          <TouchableOpacity
            style={{marginLeft: 4}}
            onPress={() => {
              if (count === 0) {
                setCount(60);
              }
            }}>
            <Text
              style={{
                color: '#06C3A5',
                fontWeight: '600',
                fontFamily: 'Poppins-Regular',
              }}>
              Resend
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <TouchableOpacity
        style={[
          style.VerifyBtn,
          {
            backgroundColor:
              f1 !== '' && f2 !== '' && f3 !== '' && f4 !== ''
                ? '#06C3A5'
                : '#C8C8C8',
          },
        ]}
        activeOpacity={0.8}
        disabled={f1 === '' || f2 === '' || f3 === '' || f4 === ''}
        onPress={handleOtpVerification}>
        <Text style={{color: '#FFFFFF', fontFamily: 'Poppins-SemiBold'}}>
          Verify Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;
