import {Image, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight() + 107,
    marginHorizontal: 16,
    flexDirection: 'column',
  },
  image: {
    height: 75,
    width: 75,
  },
  textStyles: {
    marginVertical: 20,
    fontSize: 16,
    fontWeight: '400',
    color: '#333333',
  },
  listContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  DefaultTogglebtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C8C8C8',
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 25,
  },
  selectedToggleBtn: {
    borderColor: '#06C3A5',
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  selectedIn: {
    borderColor: '#06C3A5',
    borderWidth: 1,
    height: 12.5,
    width: 12.5,
    borderRadius: 25,
    backgroundColor: '#06C3A5',
  },

  listBox1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#C8C8C8',
    paddingHorizontal: 15,
    paddingVertical: 25,
    marginVertical: 6,
  },
  listBox2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#06C3A5',
    paddingHorizontal: 15,
    paddingVertical: 25,
    marginVertical: 6,
    backgroundColor: '#E3F5FB',
  },
  innerText: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  btnStyle: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#06C3A5',
    borderRadius: 14,
    marginTop: 10,
  },
});

export default styles;
