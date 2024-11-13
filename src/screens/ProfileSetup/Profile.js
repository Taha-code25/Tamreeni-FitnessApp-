import React, {useState} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './ProfileStyles';
import ImageCropPicker from 'react-native-image-crop-picker';
import CustomInput from '../../components/PracticeComponent';
const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [showError, setShowError] = useState({
    firstName: false,
    lastName: false,
    address: false,
  });
  const Submit = () => {
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedAddress = address.trim();
    setShowError({
      firstName: trimmedFirstName === '',
      lastName: trimmedLastName === '',
      address: trimmedAddress === '',
    });
    if (trimmedFirstName && trimmedLastName && trimmedAddress) {
      Alert.alert('Welcome to Tamreeni!');
    }
  };
  const openCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImageUri(image.path);
      })
      .catch(error => {
        console.log('Camera Error: ', error);
      });
  };

  const openPicker = () => {
    Alert.alert(
      'Select Image',
      'Choose an option to pick an image',
      [
        {
          text: 'Camera',
          onPress: openCamera,
        },
        {
          text: 'Gallery',
          onPress: selectImage,
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };
  const selectImage = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImageUri(image.path); // Set image URI from the selected image path
      })
      .catch(error => {
        console.log('Error selecting image:', error);
      });
  };

  return (
    <View style={style.mainContainer}>
      <Image
        source={require('../../components/Assets/main.png')}
        style={style.banner}
      />
      <Text style={style.ProfileText}>Profile Setup</Text>
      <Text
        style={{marginTop: 8, color: '#999999', fontFamily: 'Poppins-Regular'}}>
        Let's setup your profile
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{marginTop: 30}}
        onPress={openPicker}>
        {imageUri ? (
          <Image
            source={{uri: imageUri}}
            style={{height: 80, width: 80, marginLeft: 6, borderRadius: 50}}
          />
        ) : (
          <View>
            <Image
              source={require('../../components/Assets/Camera.png')}
              style={{height: 80, width: 80, marginLeft: 2}}
            />
            <Text
              style={{
                marginTop: 10,
                fontFamily: 'Poppins-Regular',
                fontSize: 13,
              }}>
              Upload Photo
            </Text>
          </View>
        )}
      </TouchableOpacity>

      <View style={{marginTop: 24}}>
        <View style={{marginVertical: 4}}>
          <Text style={style.upperText}>
            First Name <Text style={style.star}>*</Text>
          </Text>
          <CustomInput
            value={firstName}
            onChangeText={setFirstName}
            errorMessage={
              showError.firstName ? 'Please enter your first name ' : null
            }
            label={'First name'}
          />
        </View>
        <View style={{marginVertical: 4}}>
          <Text style={style.upperText}>
            Last Name <Text style={style.star}>*</Text>
          </Text>
          <CustomInput
            value={lastName}
            onChangeText={setLastName}
            errorMessage={
              showError.lastName ? 'Please enter your last name ' : null
            }
            label={'Last name'}
          />
        </View>
        <View style={{marginVertical: 4}}>
          <Text style={style.upperText}>
            Address <Text style={style.star}>*</Text>
          </Text>
          <CustomInput
            value={address}
            onChangeText={setAddress}
            errorMessage={
              showError.address ? 'Please enter your address ' : null
            }
            label={'Address'}
          />
        </View>
      </View>
      <TouchableOpacity style={style.continueBtn} onPress={Submit}>
        <Text
          style={{
            color: '#FFFFFF',
            fontFamily: 'Poppins-Regular',
            fontWeight: '900',
          }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
