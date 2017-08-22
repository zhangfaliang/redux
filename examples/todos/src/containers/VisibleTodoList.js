
 import { connect } from 'react-redux';
 import { toggleTodo } from '../actions';
 import TodoList from '../components/TodoList';
 import { getVisibleTodos } from './VisibilitySelect.js'

 const mapDispatchToProps = (dispatch, ownProps) => ({onTodoClick:(id)=>(dispatch(toggleTodo(id)))})
 const mapStateToProps = (state, ownProps) =>({todos: getVisibleTodos(state)})

 export default connect(mapStateToProps, mapDispatchToProps)(TodoList)