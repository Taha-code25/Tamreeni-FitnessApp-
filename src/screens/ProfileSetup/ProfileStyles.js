import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  banner: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  mainContainer: {
    marginTop: 80,
    marginHorizontal: 16,
    flexDirection: 'column',
  },
  ProfileText: {
    marginTop: 16,
    fontWeight: '800',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  textInput: {
    marginVertical: 12,
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: '#EEEEEE',
    borderRadius: 14,
  },
  upperText: {
    color: '#999999',
    fontFamily: 'Poppins-Regular',
  },
  star: {
    color: '#06C3A5',
  },
  continueBtn: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#06C3A5',
    paddingVertical: 18,
    borderRadius: 14,
  },
});

export default style;
