import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import TodoApp from './Component/TodoApp'
import {createStore, applyMiddleware} from 'redux';
import {CombinedTodoReducer} from './Reducers/CombinedTodoReducer';
import Middleware from './Middleware/Middleware';

const store = createStore(CombinedTodoReducer, {}, applyMiddleware(Middleware));

const render = () => {
    ReactDOM.render(
        <TodoApp store={store} {...store.getState()} >
        </TodoApp>
        ,
        document.getElementById("root")
    )
};

store.subscribe(render);
store.dispatch({type: 'GET_TODO_DATA'});
render();