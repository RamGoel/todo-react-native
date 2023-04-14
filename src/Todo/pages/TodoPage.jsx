import React, { useState } from 'react'
import { Text, StyleSheet, View, Dimensions, TextInput, Button, TouchableOpacity } from 'react-native'
import TodoList from '../components/TodoList'
import { bgColor, navColor, primaryVar, textColor } from '../../constants'

var windowHeight = Dimensions.get('window').height
var windowWidth = Dimensions.get('window').width

function TodoPage() {

    const [todos, setTodos] = useState([{ todo: "Watch Blockchain Course", id: 1 }])
    const [todo, setTodo] = useState('')

    const addTodo = () => {
        if (todo === '') {
            alert("Enter some text")
            return;
        }
        if (todos.length == 0) setTodos(prev => [...prev, { todo: todo, id: 0 }])
        else setTodos(prev => [...prev, { todo: todo, id: (todos[todos.length - 1].id) + 1 }])
    }

    const deleteTodo = (_todoId) => {
        setTodos(prev => prev.filter(k => k.id !== _todoId))
    }

    return (
        <View style={styles.mainDiv}>

            <View style={styles.div}>
                <View style={styles.wrapper}>
                    <Text style={styles.heading1}>Your Todos</Text>
                    <View style={styles.container}>
                        <TextInput onChangeText={setTodo} style={styles.textInput} placeholder='Write a to-do' placeholderTextColor={"#fff"} />
                        <TouchableOpacity onPress={() => addTodo()} style={styles.btn}><Text style={styles.btnText}>+</Text></TouchableOpacity>
                    </View>
                    <View style={styles.todoBox}>
                        <Text style={styles.subhead}>Do these tasks</Text>
                        <TodoList todosArray={todos} delFn={deleteTodo} />
                    </View>
                </View>
            </View>
            <Text style={styles.bottomText}>Made by Ram Goel</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    heading1: {
        fontSize: 20,
        fontWeight: '500',
        width: windowWidth,
        textAlign: 'left',
        paddingHorizontal: 10,
        color: textColor,
        paddingVertical: 13,
        backgroundColor:navColor
    },
    subhead: {
        color: textColor,
        marginBottom: 10,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    container: {
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    todoBox: {
        padding: 10,
        height:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    btn: {
        width: '15%',
    },
    btnText: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        marginVertical: 'auto'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#D3D3D3',
        width: '85%',
        marginVertical: 10,
        borderRadius: 5,
        paddingLeft: 10,
        color: 'white',

    },
    div: {
        height: windowHeight * 0.95,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bottomText: {
        textAlign: 'center',
        color: 'black',
        opacity:0.3
    },
    mainDiv: {
        backgroundColor: bgColor,
        height: windowHeight
    }
})

export default TodoPage