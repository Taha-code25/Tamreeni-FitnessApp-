import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Touchable,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import style from './GetStartedStyles';
import SocialButton from '../../components/Socials';
import Or from '../../components/Or';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const GetStarted = () => {
  const Navigation = useNavigation();
  return (
    <View style={{flexDirection: 'column'}}>
      <ImageBackground
        style={{width: width, height: height / 2.5}}
        source={require('../../components/Assets/BannerPic.png')}>
        <TouchableOpacity
          style={style.skipStyles}
          onPress={() => Navigation.navigate('SignIn')}>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'Poppins-Regular',
            }}>
            Skip
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: '700',
          fontSize: 24,
          marginBottom: 15,
          fontFamily: 'Poppins-Regular',
        }}>
        Welcome to تمريني!
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          width: 300,
          textAlign: 'center',
          color: '#333333',
          fontSize: 13,
          fontWeight: '600',
          fontFamily: 'Poppins-Regular',
        }}>
        This is dummy. It is not meant to be read. It is placed here only for
        show.
      </Text>
      <View style={style.socialsContainer}>
        <SocialButton
          imageSource={require('../../components/Assets/Facebook.png')}
          buttonText={'Continue with Facebook'}
          textStyle={style.fcText}
          buttonStyle={[style.socialStyles, style.fc]}
        />
        <SocialButton
          imageSource={require('../../components/Assets/Google.png')}
          buttonText={'Continue with Google'}
          textStyle={style.googleText}
          buttonStyle={[style.socialStyles, style.google]}
        />
        <SocialButton
          imageSource={require('../../components/Assets/Apple.png')}
          buttonText={'Continue with Apple'}
          textStyle={style.appleText}
          buttonStyle={[style.socialStyles]}
        />
      </View>
      <Or />
      <TouchableOpacity style={style.btn} activeOpacity={0.8}>
        <View style={style.binder}>
          <Image
            source={require('../../components/Assets/mail.png')}
            style={style.mail}
          />
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: '600',
              marginLeft: 10,
              fontFamily: 'Poppins-Regular',
            }}>
            Continue with Email
          </Text>
        </View>
      </TouchableOpacity>
      <View style={style.SignIn}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          style={{marginLeft: 4}}
          onPress={() => Navigation.navigate('SignIn')} // Correct: Wrap the navigation in a function
        >
          <Text style={{color: '#06C3A5', fontWeight: '600'}}>Sign in.</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          textAlign: 'center',
          color: '#999999',
          fontSize: 13,
        }}>
        By selecting Facebook,Google or Apple above, you agree to our{' '}
        <Text
          style={{color: '#06C3A5'}}
          onPress={() => Navigation.navigate('TermsAndConditions')}>
          Terms and Conditions
        </Text>{' '}
        and{' '}
        <Text
          style={{color: '#06C3A5'}}
          onPress={() => Navigation.navigate('PrivacyPolicy')}>
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
};

export default GetStarted;
