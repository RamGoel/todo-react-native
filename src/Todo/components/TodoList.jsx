import React from 'react'
import Todo from './Todo'
import { View } from 'react-native'
function TodoList({todosArray, delFn}) {

  return (
    <View>
        {
            todosArray.map((todo,index)=>{
                return <Todo 
                todoObj={todo} 
                index={index} 
                delFn={delFn} 
                />
            })
        }
    </View>
  )
}

export default TodoList