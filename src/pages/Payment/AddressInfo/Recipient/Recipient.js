import React, { Component } from 'react';
import './AddressModal/AddressModal';
import './Recipient.scss';
import AddressModal from './AddressModal/AddressModal';


class Recipient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            isModalShow: false
        }
    }

    // open modal
    openModal = () => {
        this.setState({ 
            isModalShow: true
        })
    }

    // close modal
    closeModal = () => {
        this.setState({ 
            isModalShow: false
        })
    }

    render() {
        return (
            <div className="Recipient">
                <div className="userTit">
                    <h2>받으시는 분</h2>
                    <button type="button" onClick={this.openModal}>
                        <span>주소선택</span>
                    </button>
                </div>
                <div className="payTable">
                    <div className="payTableRow">
                        <div className="payTableCell cellTit">
                            <span className="name">이름</span>
                        </div>
                        <div className="payTableCell">
                            <div>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="payTableRow">
                        <div className="payTableCell cellTit">
                            <span className="phone">전화번호</span>
                        </div>
                        <div className="payTableCell">
                            <span></span>
                        </div>
                    </div>
                    <div className="payTableRow">
                        <div className="payTableCell cellTit">
                            <span className="email">주소</span>
                        </div>
                        <div className="payTableCell">
                            <span></span>
                        </div>
                    </div>
                </div>
                <AddressModal isModalShow={this.state.isModalShow} isModalClose={this.closeModal}/>
            </div>
        );
    }
}

export default Recipient;