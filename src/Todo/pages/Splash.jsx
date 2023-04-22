import React from 'react'
import { View,Image, StyleSheet } from 'react-native'
import { bgColor, inputBg, lightText, textColor, windowHeight, windowWidth } from '../../constants'
function Splash() {
  return (
    <View style={styles.container}>
        <View >

        <Image style={{
            width:windowWidth*0.3,
            height:windowWidth*0.3,
            borderRadius:10
        }} source={require('../../assets/Doit.png')}/>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:windowHeight,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    mainText:{
        color:lightText,
        fontSize:40,
        fontWeight:'bold'
    },
    subText:{
        fontSize:15,
        letterSpacing:3,
        color:lightText
    }
})

export default Splash