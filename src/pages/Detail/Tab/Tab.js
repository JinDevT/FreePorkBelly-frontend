import React, { Component } from 'react';
import './Tab.scss';

class Tab extends Component {

    render() {
        const { children } = this.props;
        return (
            <div>{children}</div>
        );
    }
}

export default Tab;