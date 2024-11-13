import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    marginHorizontal: 12,
    flexDirection: 'column',
  },
  PasswordView: {
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: '#F8F8F8',
    borderRadius: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 12,
  },
  closedEye: {
    height: 24,
    width: 24,
  },
  inputBox: {
    paddingHorizontal: 12,
    paddingVertical: 18,
  },
  ResetBtn: {
    marginVertical: 30,
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#06C3A5',
    borderRadius: 14,
  },
});
export default style;
