import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Back from '../../components/Back';
import CustomInput from '../../components/PracticeComponent';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const navigation = useNavigation();

  const submit = () => {
    const trimmedEmail = email.trim();
    if (trimmedEmail === '' || !isValidEmail(trimmedEmail)) {
      setShowError(true);
    } else {
      setShowError(false);
      navigation.navigate('Otp', {context: 'ForgotPassword'});
    }
  };

  return (
    <View style={styles.container}>
      <Back onPress={() => navigation.navigate('SignIn')} />

      <View style={styles.fpStyles}>
        <Text style={styles.textStyles}>Forgot Password</Text>

        <Text style={styles.instructionText}>
          Enter the email address associated with your account to receive a
          4-digit verification code
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Email address</Text>
          <CustomInput
            label="Username or Email"
            value={email}
            onChangeText={setEmail}
            secureTextEntry={false} // For email input
            errorMessage={showError ? 'Please enter a valid email' : ''}
            keyboardType="email-address"
            isEmail={true}
            style={styles.customInput}
          />
        </View>

        <TouchableOpacity
          style={styles.btnStyle}
          activeOpacity={0.8}
          onPress={submit}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 20,
  },
  fpStyles: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
  textStyles: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  instructionText: {
    color: '#999999',
    fontSize: 14,
    textAlign: 'justify',
    width: '100%',
    marginBottom: 40,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 12,
    width: '100%', // Ensures consistent width for CustomInput
  },
  labelText: {
    marginBottom: 12,
    fontSize: 12,
    color: '#999999',
  },
  customInput: {
    width: '100%', // Make CustomInput take up full width
  },
  btnStyle: {
    alignItems: 'center',
    paddingVertical: 18,
    backgroundColor: '#06C3A5',
    borderRadius: 14,
    marginTop: 10,
    width: '100%',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
});

export default ForgotPassword;
