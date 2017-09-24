import React from "react"
import Link from "./Link"

class RemoveTodo extends React.Component {

    filterAction = (id, store) => e => {
        e.preventDefault();
        store.dispatch({
            type: "REMOVE_TODO_API",
            id: id
        });
    };

    render() {
        return (
            <Link
                actionMethod={this.filterAction(this.props.id, this.props.store)}>
                x
            </Link>
        )
    }
}

export default RemoveTodo;