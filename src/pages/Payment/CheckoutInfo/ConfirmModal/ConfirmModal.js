import React, { Component } from 'react';
import './ConfirmModal.scss'


class ConfirmModal extends Component {

    render() {
        const { isModalShow, isModalClose } = this.props;
        console.log("?")
        return (
            <>
                {
                    isModalShow ?
                    <div className="ConfirmModal">
                        주문이완료되었습니다
                    </div>
                    
                    :
                    null
                }
            </>
        );
    }
}

export default ConfirmModal;