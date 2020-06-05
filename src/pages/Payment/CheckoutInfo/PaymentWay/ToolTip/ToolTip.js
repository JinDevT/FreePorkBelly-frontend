import React, { Component } from 'react';
import "./ToolTip.scss";

class Tooltip extends Component {
    render () {
        const { show } = this.props;
        let displayClass = (show) ? 'show' : 'none';
        
        return (
            <div className="ToolTip">
                <div className="toolTipinner">
                    {show &&
                        <div className={`tooltip-body ${displayClass}`}>
                            <span>입금계좌: 정육각</span>
                            <span>계좌번호: 기업은행 010-1234-5678</span>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Tooltip;