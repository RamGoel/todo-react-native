import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { textColor, todoColor } from '../../constants'
function Todo({ todoObj, delFn }) {
    return (
        <View style={styles.todoBox}>

            <Text onLongPress={() => {
                alert("Really want to delete?")
            }} style={styles.todoText}>{todoObj.todo}</Text>

            <TouchableOpacity onPress={() => delFn(todoObj.id)}>
                {/* <Icon name="delete" /> */}
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    todoBox: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: todoColor,
        marginBottom: 10,
        paddingVertical: 3,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    todoText: {
        color: textColor,
        fontSize: 15,
        margin: 0,
        padding: 0,
    },
    todoCTA: {
        fontSize: 30,
        color: textColor
    }
})

export default Todo