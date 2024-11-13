import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
const PasswordInput = ({
  label,
  password,
  setPassword,
  passwordVisible,
  showPassword,
  placeholder,
}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 16, marginBottom: 12}}>
        <Text style={{color: '#86868A', fontFamily: 'Poppins-Regular'}}>
          {label}
        </Text>
        <Text style={{marginLeft: 4, color: '#06C3A5'}}>*</Text>
      </View>
      <View style={style.Password}>
        <TextInput
          style={style.passwordBox}
          placeholder={placeholder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={passwordVisible}
          maxLength={12}
        />
        <TouchableOpacity activeOpacity={0.8} onPress={showPassword}>
          <Image
            source={require('../components/Assets/Eye-Closed.png')}
            style={style.closedEye}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  passwordBox: {
    paddingLeft: 14, // Reduce padding on the right to leave room for the icon
    paddingVertical: 16,
    backgroundColor: '#EEEEEE',
    flex: 1,
    borderRadius: 14,
  },
  Password: {
    flexDirection: 'row',
    alignItems: 'center', // Align text input and icon vertically
    justifyContent: 'space-between', // Add space between the input and icon
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: '#F8F8F8',
    borderRadius: 14,
  },
  closedEye: {
    height: 24,
    width: 24,
    marginRight: 12, // Add space between the icon and the edge of the container
  },
});

export default PasswordInput;
