import React from 'react'
import Todo from './Todo'
import { View } from 'react-native'
function TodoList({todosArray, delFn}) {

  return (
    <View>
        {
            todosArray.map(todo=>{
                return <Todo todoObj={todo} key={todo.id} delFn={delFn} />
            })
        }
    </View>
  )
}

export default TodoList