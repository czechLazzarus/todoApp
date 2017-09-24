import {todos} from './Todos';
import {visibilityFilter} from './VisibilityFilter';
import {combineReducers} from 'redux';

export const CombinedTodoReducer = combineReducers({visibilityFilter, todos});