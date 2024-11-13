import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    marginHorizontal: 16,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyles: {
    height: 80,
    width: 100,
  },
  signInStyles: {
    marginTop: 15,
    marginRight: 8,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Cerebri Sans',
  },
  signInContainer: {
    flexDirection: 'column',
  },
  GetInStyles: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    fontFamily: 'Cerebri Sans',
  },
  inputView: {
    marginTop: 10,
  },
  inputText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999999',
    marginVertical: 10,
  },
  inputBox: {
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  userNameView: {
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: '#F8F8F8',
    borderRadius: 14,
  },
  PasswordView: {
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: '#F8F8F8',
    borderRadius: 14,
    alignItems: 'center',
  },
  forgot: {
    marginVertical: 15.24,
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#06C3A5',
  },
  signStyles: {
    alignItems: 'center',
    backgroundColor: '#06C3A5',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 14,
    marginVertical: 14,
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  View1: {
    flex: 1, // Line takes up the available space
    height: 1, // Line thickness
    backgroundColor: '#999999', // Line color (black)
  },
  text: {
    color: '#999999',
    fontSize: 16,
  },
  socialStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 14,
    marginTop: 14,
  },
  SocialText: {
    fontSize: 14,
    fontWeight: '600',
  },
  fcText: {
    color: '#1877F2',
  },
  fc: {
    borderColor: '#1877F2',
  },
  google: {
    borderColor: '#D9D9D9',
  },
  googleText: {
    color: '#999999',
  },
  appleText: {
    fontSize: 14,
    fontWeight: '400',
  },
  apple: {},
  signUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 14,
  },
  passwordBox: {
    paddingLeft: 14, // Reduce padding on the right to leave room for the icon
    paddingVertical: 14,
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

export default styles;
