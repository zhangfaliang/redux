import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
let  input;
const AddTodos =({dispatch})=>{
  return(
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        if(!input&&!input.value.trim())return
          dispatch(addTodo(input.value))
        input.value='';
      }}>
      <input ref={(node)=>{
        input = node
      }}/>

      <button type='submit'>
        提交
      </button>
      </form>
    </div>
  )
}

 export default connect()(AddTodos) 