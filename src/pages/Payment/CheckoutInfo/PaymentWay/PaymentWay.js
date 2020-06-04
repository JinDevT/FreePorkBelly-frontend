import React, { Component } from 'react';
import ToolTip from './ToolTip/ToolTip';
import './PaymentWay.scss';

class PaymentWay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTooltip : false,
        }
    }

    showTooltip = () => {
        const { showTooltip } = this.state;
        this.setState({
            showTooltip: !showTooltip
        })
    }
    render() {
        const { showTooltip } = this.state;
        return (
            <div className="section PaymentWay">
                <h2>결제방법</h2>
                <div className="boxModel">
                    <div className="boxModelInner">
                        <ul className="wayList">
                            <li>
                                <input type="radio" id="cart" name="cart"/>
                                <label for="cart">카드결제</label>
                                <div className="buttonBox">
                                    <button type="button"> 
                                        <span>결제카드 선택</span>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <input type="radio" id="noCart" name="cart" onClick={this.showTooltip}/>
                                <label for="noCart">무통장결제</label>
                                <ToolTip show={showTooltip}>
                                    <input type="radio" onClick={showTooltip}/>
                                </ToolTip>
                                <div className="buttonBox">
                                    <button type="button">
                                        <span>환급계좌 등록</span>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default PaymentWay;