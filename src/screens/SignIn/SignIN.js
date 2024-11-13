import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styles from './SignInStyles';
import Socials from '../../components/Socials';
import Back from '../../components/Back';
import {useNavigation} from '@react-navigation/native';
import PracticeComponent from '../../components/PracticeComponent';
const SignIN = () => {
  const navigation = useNavigation();
  const {
    imageView,
    mainContainer,
    imageStyles,
    signInStyles,
    signInContainer,
    GetInStyles,
    inputView,
    inputText,
    forgot,
    signStyles,
    or,
    text,
    View1,
    socialStyles,
    fcText,
    SocialText,
    signUp,
    fc,
    google,
    googleText,
    appleText,
  } = styles;

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState({
    email: false,
    password: false,
  });

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submit = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    setShowError({
      email: trimmedEmail === '' || !isValidEmail(email),
      password: trimmedPassword === '',
    });
    if (trimmedEmail && trimmedPassword && isValidEmail(email)) {
      navigation.navigate('Questionnaire');
    }
  };
  return (
    <ScrollView style={mainContainer} showsVerticalScrollIndicator={false}>
      <Back onPress={() => navigation.navigate('GetStarted')} />
      <View style={imageView}>
        <Image
          source={require('../../components/Assets/main.png')}
          style={imageStyles}
        />
      </View>
      <View style={signInContainer}>
        <Text style={signInStyles}>Sign In</Text>
        <Text style={GetInStyles}>Let’s get into the app</Text>
      </View>
      <View style={inputView}>
        <Text style={inputText}>Username or email address</Text>
        <View>
          <PracticeComponent
            label="Username or Email"
            value={email}
            onChangeText={setEmail}
            secureTextEntry={false} // For email input
            errorMessage={showError.email ? 'Please enter a valid email' : ''}
            keyboardType="email-address"
            isEmail={true}
          />
        </View>
        <View>
          <Text style={inputText}>Password</Text>
          <PracticeComponent
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={passwordVisible}
            errorMessage={
              showError.password ? 'Please enter your password' : ''
            }
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={signStyles}
        activeOpacity={0.8}
        onPress={() => submit()}>
        <Text style={{color: 'white'}}>Sign In</Text>
      </TouchableOpacity>
      <View style={or}>
        <View style={View1}></View>
        <Text style={text}>or</Text>
        <View style={View1}></View>
      </View>

      <Socials
        imageSource={require('../../components/Assets/Facebook.png')}
        buttonText={'Continue with Facebook'}
        textStyle={[SocialText, fcText]}
        buttonStyle={[socialStyles, fc]}
      />
      <Socials
        imageSource={require('../../components/Assets/Google.png')}
        buttonText={'Continue with Google'}
        textStyle={[fcText, googleText]}
        buttonStyle={[socialStyles, google]}
      />
      <Socials
        imageSource={require('../../components/Assets/Apple.png')}
        buttonText={'Continue with Facebook'}
        textStyle={appleText}
        buttonStyle={[socialStyles]}
      />

      <View style={signUp}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity
          style={{marginLeft: 4}}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={{color: '#06C3A5', fontWeight: '600'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignIN;
