import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingLeft: 14,
    alignItems: 'center',
    paddingVertical: 18,
    backgroundColor: '#f9f9f9',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    shadowColor: '##E8E8E8',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  Welcometext: {
    flexDirection: 'row',
    marginHorizontal: 14,
    marginTop: 20,
    alignItems: 'center',
  },
  BodyText: {
    marginHorizontal: 14,
    marginTop: 4,
  },
  Text: {
    color: '#151C2C',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    textAlign: 'justify',
    marginVertical: 8,
  },
});

export default style;
