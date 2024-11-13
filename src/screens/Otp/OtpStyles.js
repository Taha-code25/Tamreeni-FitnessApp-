import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    marginHorizontal: 12,
  },
  otpContainer: {
    flexDirection: 'column',
    marginVertical: 30,
    marginHorizontal: 8,
  },
  MainText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
  },
  otpBox: {
    textAlign: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 14,
    width: 50,
    height: 50,
    marginLeft: 10,
    borderColor: '#EEEEEE',
  },
  otpView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  VerifyBtn: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#C8C8C8',
    borderRadius: 14,
  },
});

export default style;
