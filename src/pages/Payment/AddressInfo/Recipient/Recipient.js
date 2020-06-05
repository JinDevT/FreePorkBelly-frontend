import React, { Component } from 'react';
import AddressModal from './AddressModal/AddressModal';
import { API } from '../../../../../src/config.js';
import './Recipient.scss';

const body = document.getElementsByTagName('body')[0];
class Recipient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            address: "",
            isModalShow: false,
        }
    }

    componentDidMount() {
            localStorage.setItem("access_token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6OX0.FfOcmHfD1eYobVgH8qWmfnucZQwkjsOs0KxlAxNO6so")
            const token = localStorage.getItem("access_token");
            fetch(`${API}/order/address`, {
                method: "GET",
                headers : {
                    "Content-type" : "application/json",
                    "Authorization" : token
                },
            })
            .then(res => res.json())
            .then(res => this.setState({
                name: res.data[0].name,
                phone: res.data[0].phone,
                address: res.data[0].address,
            })).catch(err => console.log("err: ", err));
        }

    // open modal
    openModal = () => {
        this.setState({ 
            isModalShow: true
        })
        body.classList.add("not_scroll");
    }

    // close modal
    closeModal = () => {
        this.setState({ 
            isModalShow: false
        })
        body.classList.remove("not_scroll");
    }

    render() {
        const { name, phone, address } = this.state;
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
                                <span>{name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="payTableRow">
                        <div className="payTableCell cellTit">
                            <span className="phone">전화번호</span>
                        </div>
                        <div className="payTableCell">
                            <span>{phone}</span>
                        </div>
                    </div>
                    <div className="payTableRow">
                        <div className="payTableCell cellTit">
                            <span className="email">주소</span>
                        </div>
                        <div className="payTableCell">
                            <span>{address}</span>
                        </div>
                    </div>
                </div>
                <AddressModal isModalShow={this.state.isModalShow} isModalClose={this.closeModal}/>
            </div>
        );
    }
}

export default Recipient;