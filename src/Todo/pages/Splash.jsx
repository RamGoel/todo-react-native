import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { bgColor, inputBg, lightText, textColor, windowHeight } from '../../constants'
function Splash() {
  return (
    <View style={styles.container}>
        <View style={styles.textBox}>

        <Text style={styles.mainText}>
            Doit
        </Text>
        <Text style={styles.subText}>
            OK, do it
        </Text>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:bgColor,
        height:windowHeight,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    textBox:{
        borderWidth:5,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderColor:inputBg,
        padding:25,
        borderRadius:200,

    },
    mainText:{
        color:textColor,
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