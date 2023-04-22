import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { inputBg, lightText, textColor, todoColor } from '../../constants'
function Todo({ todoObj, delFn, index }) {
    return (
        <View style={styles.todoBox}>

            <Text onLongPress={() => {
                alert("Really want to delete?")
            }} style={styles.todoText}>{index+1}. {todoObj.todo}</Text>

            <TouchableOpacity onPress={() => delFn(todoObj.id)}>
                <Text style={styles.todoCTA}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    todoBox: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: inputBg,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    todoText: {
        color: textColor,
        fontSize: 15,
        margin: 0,
        padding: 0,
        width:'80%',
        lineHeight:20
    },
    todoCTA: {
        fontSize: 15,
        color: lightText
    }
})

export default Todo