import React from 'react'
import Link from './Link'

class Footer extends React.Component {

    filterAction = (filter, store) => e => {
        e.preventDefault();
        store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter
        });
    };

    render() {
        return (<p>
                Filtration: {' '}
                <Link
                    actionMethod={this.filterAction("SHOW_ALL", this.props.store)}>
                    ALL
                </Link>
                {' '}
                <Link
                    actionMethod={this.filterAction("SHOW_COMPLETE", this.props.store)}>
                    Completed
                </Link>
                {' '}
                <Link
                    actionMethod={this.filterAction("SHOW_ACTIVE", this.props.store)}>
                    ACTIVE
                </Link>
            </p>
        );
    }
}

export default Footer;