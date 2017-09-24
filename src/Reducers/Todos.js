import {todo} from './Todo'

export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        case 'GET_TODO_DATA_SUCCESS':
            return action.data;
        case 'REMOVE_TODO':
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
};

