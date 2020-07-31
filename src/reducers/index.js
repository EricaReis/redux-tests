import { combineReducers } from 'redux';
import todos from './todos'; 
import store from '../store';

//51min https://www.youtube.com/watch?v=69e1MoUWE1g

export default combineReducers({
    todos,
})