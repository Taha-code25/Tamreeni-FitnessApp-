import React from 'react'
import { View,Image,Text,TouchableOpacity } from 'react-native'
import style from '../screens/Questionannaires/style'
const Options2 = ({url,text}) => {
  return (
    <View>
    <TouchableOpacity style={style.options}>
      <Image source={url} style={{height:22,width:32,marginRight:6}}/>
      <Text style={{marginLeft:4,color:"#999999"}}>{text}</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Options2