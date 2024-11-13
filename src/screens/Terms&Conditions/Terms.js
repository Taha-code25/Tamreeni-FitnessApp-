import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Back from '../../components/Back';
import {useNavigation} from '@react-navigation/native';
import style from './TermsStyles';
import Practice from '../../components/Practice';

const Terms = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    // <ScrollView>
    //   <View style={style.view1}>
    //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //       <Back onPress={() => navigation.navigate('GetStarted')} />
    //       <Text
    //         style={{
    //           fontSize: 16,
    //           fontWeight: '600',
    //           fontFamily: 'Poppins-Regular',
    //         }}>
    //         Terms & Conditions
    //       </Text>
    //     </View>
    //   </View>

    //   <View style={style.Welcometext}>
    //     <Text style={{fontFamily: 'Poppins-Regular'}}>Welcome to</Text>
    //     <Text
    //       style={{
    //         marginLeft: 3,
    //         fontWeight: '600',
    //         fontFamily: 'Poppins-SemiBold',
    //       }}>
    //       Tamreeni!
    //     </Text>
    //   </View>
    //   <View style={style.BodyText}>
    //     <Text style={style.Text}>
    //       These terms and conditions outline the rules and regulations for the
    //       use of Company Name's Website, located at Website.com.
    //     </Text>
    //     <Text>
    //       By accessing this website we assume you accept these terms and
    //       conditions. Do not continue to use Website Name if you do not agree to
    //       take all of the terms and conditions stated on this page.
    //     </Text>
    //     <Text style={style.Text}>
    //       The following terminology applies to these Terms and Conditions,
    //       Privacy Statement and Disclaimer Notice and all Agreements: “Client”,
    //       “You” and “Your” refers to you, the person log on this website and
    //       compliant to the Company's terms and conditions. “The Company”,
    //       “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”,
    //       “Parties”, or “Us”, refers to both the Client and ourselves. All terms
    //       refer to the offer, acceptance and consideration of payment necessary
    //       to undertake the process of our assistance to the Client in the most
    //       appropriate manner for the express purpose of meeting the Client's
    //       needs in respect of provision of the Company's stated services, in
    //       accordance with and subject to, prevailing law of Netherlands. Any use
    //       of the above terminology or other words in the singular, plural,
    //       capitalization and/or he/she or they, are taken as interchangeable and
    //       therefore as referring to same.
    //     </Text>
    //     <Text
    //       style={{
    //         marginVertical: 8,
    //         fontSize: 18,
    //         fontFamily: 'Poppins-SemiBold',
    //       }}>
    //       Cookies
    //     </Text>
    //     <Text style={style.Text}>
    //       We employ the use of cookies. By accessing Website Name, you agreed to
    //       use cookies in agreement with the Company Name's Privacy Policy.
    //     </Text>
    //     <Text>Most interactive websites use cookies to let us retriev</Text>
    //   </View>
    // </ScrollView>
    <Practice
      label={'Enter your password'}
      value={password}
      onChangeText={setPassword}
      isPassword={true}
      condition={isP}
    />
  );
};

export default Terms;
