import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
//一个函数配置属性 每个属性是一个函数
const todoApp = combineReducers({
  todos,
  visibilityFilter,
})

export default todoApp;