import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, ToastAndroid, ScrollView, Alert, View, Dimensions, TextInput, Button, TouchableOpacity } from 'react-native'
import TodoList from '../components/TodoList'
import { bgColor, inputBg, lightText, navColor, primaryVar, textColor } from '../../constants'
import Splash from './Splash'

var windowHeight = Dimensions.get('window').height
var windowWidth = Dimensions.get('window').width

function TodoPage() {

    const [todos, setTodos] = useState([
        { todo: "Review Doit App on Playstore", id: 1 },

    ])
    const [todo, setTodo] = useState('')
    const [showPage, setShow] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setShow(1)
        }, 3000)
    })
    const addTodo = () => {
        if (todo === '') {
            ToastAndroid.show(
                'Enter Some Text First', ToastAndroid.SHORT
            );
            return;
        }
        if (todos.length == 0) setTodos(prev => [...prev, { todo: todo, id: 0 }])
        else setTodos(prev => [...prev, { todo: todo, id: (todos[todos.length - 1].id) + 1 }])
        setTodo('')
    }

    const deleteTodo = (_todoId) => {
        setTodos(prev => prev.filter(k => k.id !== _todoId))
    }

    return (
        (showPage) ? <ScrollView contentContainerStyle={styles.mainDiv}>

            <ScrollView contentContainerStyle={styles.div}>
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <TextInput onChangeText={setTodo} value={todo} style={styles.textInput} placeholder='Write a to-do' placeholderTextColor={lightText} />
                        <TouchableOpacity onPress={() => addTodo()} style={styles.btn}>
                            <Text style={styles.btnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.todoBox}>
                        <Text style={styles.subhead}>{
                            (todos.length == 0)
                                ? "Yay! no more tasks"
                                : (todos.length == 1)
                                    ? `Just ${todos.length} more task`
                                    : `Just ${todos.length} more tasks`}</Text>
                        <TodoList todosArray={todos} delFn={deleteTodo} />
                    </View>
                </View>
            </ScrollView>
            <Text style={styles.bottomText}>Developed by Ram Goel | v1.0</Text>
        </ScrollView> : <Splash />
    )
}



const styles = StyleSheet.create({
    subhead: {
        color: lightText,
        marginBottom: 10,
        paddingBottom: 5
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        backgroundColor: inputBg,
        borderRadius: 300,
        marginVertical: 10,
        width: windowWidth * 0.95
    },
    todoBox: {
        padding: 10,
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    btn: {
        width: '15%',
    },
    btnText: {
        fontSize: 40,
        textAlign: 'center',
        color: lightText,
        marginVertical: 'auto',
        opacity: 0.3
    },
    textInput: {
        width: '85%',
        marginVertical: 10,
        borderRadius: 5,
        paddingLeft: 10,
        color: lightText,
        backgroundColor: 'transparent',
        height: windowHeight * 0.05

    },
    div: {
        flexDirection: 'row',
        justifyContent: 'center',
        minHeight: windowHeight * 0.9,
        backgroundColor: bgColor
    },
    bottomText: {
        textAlign: 'center',
        color: lightText,
        opacity: 1,
        height: windowHeight * 0.1
    },
    mainDiv: {
        backgroundColor: bgColor,
    }
})

export default TodoPage