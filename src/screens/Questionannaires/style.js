import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
const style = StyleSheet.create({
  imageBackground: {
    height: height / 3,
    width: width,
  },
  mainText: {
    fontSize: 24,
    alignSelf: 'center',
    marginVertical: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    marginHorizontal:8
  },
  subText: {
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#676666',
  },
  optionContainer: {
    marginTop: 30,
  },
  BottomView: {
    bottom: 0,
    position: 'absolute',
    height: height / 6,
    width: width,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  btnStyles: {
    paddingVertical: 14,
    backgroundColor: '#06C3A5',
    width: width * 0.9,
    alignItems: 'center',
    borderRadius: 14,
    // marginTop:20,
    // flex:1
  },
  genderStyles: {
    alignItems: 'center',
    paddingVertical: 28,
    width: width / 2.5,
    marginHorizontal: 14,
    borderWidth: 0.75,
    borderRadius: 14,
    borderColor: '#999999',
  },
  back: {
    paddingVertical: 12,
  },
  dateStyle: {
    alignItems: 'center',
    marginTop: 10,
  },
  recommendation:{
    alignSelf:"center",
    marginBottom:16,
    fontSize:20,
    fontWeight:"300"
  },
  options:{
    borderWidth:1,
    width:width/2.7,
    paddingVertical:14,
    borderRadius:50,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    borderColor:"#999999",
    marginBottom:20
  },
  multipleOptions:{
    marginVertical:35,
    marginHorizontal:8,
    flexDirection:"column"
  }
});

export default style;
