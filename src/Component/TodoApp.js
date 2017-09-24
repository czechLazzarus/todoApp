import React from 'react';
import Footer from './Footer';
import RemoveTodo from './RemoveTodo';

class TodoApp extends React.Component {
    getVisibleTodos = (todos, filter) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETE':
                return todos.filter(t => t.complete);
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.complete);
            default:
                return todos;
        }
    };

    render() {
        const visibleTodos = this.getVisibleTodos(
            this.props.todos,
            this.props.visibilityFilter
        );
        const todoList = visibleTodos.map(todo =>
            <li className="todo-item">
                <div className="todo-text" key={todo.id}
                     onClick={() => {
                         this.props.store.dispatch({
                             type: "TOGGLE_TODO_API", id: todo.id
                         });
                     }}
                     style={{textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.title}
                </div>
                <RemoveTodo id={todo.id} store={this.props.store}/>
            </li>
        );

        return (
            <div>
                <input maxLength="30" className="todo-input" required ref={node => {
                    this.input = node
                }}/>
                <button onClick={() => {
                    if (this.input.value.trim())
                        this.props.store.dispatch({type: "POST_TODO_DATA", title: this.input.value.trim()});
                }}>
                    AddTodo
                </button>
                <ul className="p-0">
                    {todoList}
                </ul>
                <Footer store={this.props.store}/>
            </div>
        )
    }
}

export default TodoApp;