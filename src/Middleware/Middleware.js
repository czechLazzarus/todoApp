import request from 'superagent'

const getTodoApi = next => (route, name) => request
    .get(route)
    .set('Accept', 'application/json')
    .end((err, res) => {
        if (err) {
            return next({
                type: 'GET_TODO_DATA_ERROR',
                err
            })
        }
        const data = JSON.parse(res.text);
        next({
            type: 'GET_TODO_DATA_SUCCESS',
            data
        })
    });

const postTodoApi = next => (route, name, postData) => request
    .post(route)
    .send({title: postData})
    .set('Accept', 'application/json')
    .end((err, res) => {
        if (err) {
            return next({
                type: 'POST_TODO_DATA_ERROR',
                err
            })
        }
        const data = JSON.parse(res.text);
        next({
            type: 'ADD_TODO',
            ...data
        })
    });

const toggleTodoApi = next => (route, name, todoId) => request
    .patch(route)
    .set('Accept', 'application/json')
    .end((err, res) => {
        if (err) {
            return next({
                type: 'TOGGLE_TODO_ERROR',
                err
            })
        }
        next({
            type: 'TOGGLE_TODO',
            id: todoId
        })
    });

const removeTodoApi = next => (route, name, todoId) => request
    .delete(route)
    .set('Accept', 'application/json')
    .end((err, res) => {
        if (err) {
            return next({
                type: 'REMOVE_TODO_ERROR',
                err
            })
        }
        next({
            type: 'REMOVE_TODO',
            id: todoId
        })
    });

const Middleware = store => next => action => {
    next(action);
    switch (action.type) {
        case 'GET_TODO_DATA':
            const getApi = getTodoApi(next);
            getApi('http://todosymfony.cz/todos', 'GET_TODO_DATA');
            break;
        case 'POST_TODO_DATA':
            const postApi = postTodoApi(next);
            postApi('http://todosymfony.cz/todos', 'POST_TODO_DATA', action.title);
            break;
        case 'TOGGLE_TODO_API':
            const toggleApi = toggleTodoApi(next);
            toggleApi('http://todosymfony.cz/todos/' + action.id, 'TOGGLE_TODO_API', action.id);
            break;
        case 'REMOVE_TODO_API':
            const removeApi = removeTodoApi(next);
            removeApi('http://todosymfony.cz/todos/' + action.id, 'REMOVE_TODO_API', action.id);
            break;
        default:
            break
    }

};

export default Middleware;

