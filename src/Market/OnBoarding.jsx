import React from 'react'
import { Dimensions, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
var windowHeight=Dimensions.get('window').height
var windowWidth=Dimensions.get('window').width
function OnBoarding() {
  return (
    <View style={styles.screen}>
        <View style={styles.header}>
            <Image source={require('../assets/image2.jpg')} style={styles.headerIcons} />
            <Image source={require('../assets/image3.jpg')} style={styles.headerIcons} />
        </View>

        <View>
            <Text style={styles.homeHead}>Market</Text>
            <Text style={styles.homeHead}>your growth</Text>
            <Text style={styles.homeHead}>strategy</Text>
        </View>

        <Image source={require('../assets/image1.jpg')} />

        <View style={styles.btnCover}>

        <TouchableOpacity style={styles.homeBtn}>
            <View style={styles.btnInside}>
                <Text style={styles.btnText}>
                    Get Started
                </Text>

                <View style={styles.btnBtn}>
                    <Icon name={'angle-right'} />
                </View>
            </View>
        </TouchableOpacity>
        </View>
    </View>
  )
}


const styles=StyleSheet.create({
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:windowWidth,
        paddingHorizontal:15,
        paddingVertical:10,
        marginHorizontal:'auto',
        height:windowWidth*0.35
    },
    headerIcons:{
        width:windowWidth*0.1,
        height:windowWidth*0.1
    },
    screen:{
        backgroundColor:'#d3f36b',
        height:windowHeight,
        textAlign:'center'
    },
    homeHead:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        color:'black',
        lineHeight:40
    },
    btnInside:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    homeBtn:{
        width:windowWidth*0.5,
        backgroundColor:'black',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:200,
        marginHorizontal:'auto'
    },
    btnCover:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    },
    btnText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        width:'70%'
    },
    btnBtn:{
        backgroundColor:'white',
        width:windowWidth*0.12,
        height:windowWidth*0.12,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:200
    }
})

export default OnBoarding