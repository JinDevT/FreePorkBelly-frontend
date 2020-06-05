import React, { Component } from 'react';
import './OrderList.scss';

class OrderList extends Component {
    render() {
        const { cartList } = this.props;
        return (
            <>
                <li className="OrderList">
                    <div className="listName">
                        <span>{cartList.name}</span>
                        <span>{cartList.selected_option}</span>
                    </div>
                    <div className="listPurpose">
                        <span>{cartList.per_quantity}</span>
                    </div>
                    <div className="listNumber">
                        <span>{cartList.quantity}</span>
                    </div>
                    <div className="listPrice">
                        <span>{cartList.sales_price}</span>
                    </div>
                </li>
            </>
        );
    }
};

export default OrderList;