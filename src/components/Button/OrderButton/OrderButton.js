import React, { Component } from 'react';
import './OrderButton.scss';

class OrderButton extends Component {
    render() {
        const { stageChange } = this.props;
        return (
            <div className="stageBox">
                <button type="button" className={this.props.clazzName} onClick={stageChange}>
                    <span>{this.props.text}</span>
                </button>
            </div>
                
        );
    }
}

export default OrderButton;