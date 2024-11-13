import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Back from '../../components/Back';
import {useNavigation} from '@react-navigation/native';
import style from './PrivacyStyles';

const PrivacyPolicy = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={style.view1}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Back onPress={() => navigation.navigate('GetStarted')} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              fontFamily: 'Poppins-Regular',
            }}>
            Privacy Policy
          </Text>
        </View>
      </View>
      <View style={style.TextStyles}>
        <Text style={{marginRight: 4, fontFamily: 'Poppins-Regular'}}>
          At <Text style={{fontWeight: '800'}}>Tamreeni!</Text>, accesible at{' '}
          <Text style={{fontWeight: '800'}}>tamreeni.com</Text>,one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Website Name and how we use it.
        </Text>
      </View>
      <Text style={style.TextStyles}>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us through email at
        Email@Website.com
      </Text>
      <Text style={style.TextStyles}>
        This privacy policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in Website Name. This policy is not applicable to
        any information collected offline or via channels other than this
        website.
      </Text>
      <Text style={{marginTop: 12, marginHorizontal: 12, fontSize: 18}}>
        Consent
      </Text>
      <Text style={style.TextStyles}>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </Text>
      <Text style={{marginTop: 12, marginHorizontal: 12, fontSize: 18}}>
        Information we collect
      </Text>
      <Text style={style.TextStyles}>
        The personal information that you are asked to provide, and the reasons
        why you are asked to provide it, will be made clear to you at the point
        we ask you to provide your personal information.
      </Text>
      <Text style={style.TextStyles}>
        If you contact us directly, we may receive additional information about
        you such as your name, email address, phone number, the contents of the
        message and/or attachments you may send us, and any other information
        you may choose to provide.
      </Text>
      <Text style={style.TextStyles}>
        When you register for an Account, we may ask for your contact
        information, including items such as name,
      </Text>
    </ScrollView>
  );
};

export default PrivacyPolicy;
