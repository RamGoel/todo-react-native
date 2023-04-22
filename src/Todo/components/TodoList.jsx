import React from 'react'
import Todo from './Todo'
import { Image, View } from 'react-native'
import { windowHeight, windowWidth } from '../../constants'
function TodoList({todosArray, delFn}) {

  return (
    <View>
        {(todosArray.length)?
            todosArray.map((todo,index)=>{
                return <Todo 
                todoObj={todo} 
                index={index} 
                delFn={delFn} 
                />
            })
        :<View style={{
          height:windowHeight*0.7,
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Image source={require('../../assets/mpa-rocket.gif')} style={{
          width:windowWidth*0.7,
          height:windowWidth*0.7,
        }} />
        </View>}
    </View>
  )
}

export default TodoList