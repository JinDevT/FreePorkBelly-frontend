import React, { Component } from 'react';
import DaumPostCode from 'react-daum-postcode';
import { API } from '../../../../../../src/config.js'
import './AddressModal.scss'
class AddressModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            address: "",
            zoneCode : "",
            fullAddress : "",
            isDaumPost : false,
            isRegister : false,
            register: [],
        }
    }

    buttonChange = () => {
        const { name, phone, address, fullAddress } = this.state;
        if(name && phone && address && fullAddress) {
            this.setState({
                isRegister : true
            })
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }, () => this.buttonChange())
    }

    handleOpenPost = () => {
        this.setState({
            isDaumPost : true
        })
    }

    handleRegister = () => {
        const { name, phone, address, fullAddress, register } = this.state;
        const userAddress = fullAddress + address
        const newRegiste = register.concat({ name, phone, userAddress});
        const token = localStorage.getItem("access_token");
        fetch(`${API}/order/address`, {
            method: "POST",
            headers : {
                "Content-type" : "application/json",
                "Authorization" : token
            },
            body : JSON.stringify({
                name: name,
                phone: phone,
                address: userAddress
            })
        })
        .then(res => {
            if(res.status === 200) {
                this.setState({
                    register : newRegiste,
                    name: "",
                    phone: "",
                    zoneCode: "",
                    fullAddress: "",
                    address: "",
                }, () => {
                    this.props.isModalClose();
                    window.location.reload();
                })
            }
        })
       
    }

    // postcode
    handleAddress = (data) => {
        let AllAddress = data.address;
        let extraAddress = ''; 
        let zoneCodes = data.zonecode;
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          AllAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        this.setState ({
            fullAddress: AllAddress,
            zoneCode : zoneCodes
        })
      }

    render() {
        const { isModalShow, isModalClose } = this.props;
        const { name, phone, address, isDaumPost, fullAddress, zoneCode, isRegister } = this.state;
        // DaumPostCode style
        const width = 595;
        const height = 450;
        const modalStyle = {
            position: "absolute",
            top: 0,
            left: "-178px",
            zIndex: "100",
            border: "1px solid #000000",
            overflow: "hidden"
        }
        return (
            <>
                {
                    isModalShow ?
                    <div className="AddressModal">
                        <div className="modal">
                            <div className="modalTit">
                                <h1>주소입력</h1>
                            </div>
                            <div className="modalTable">
                                <div className="modalRow">
                                    <div className="modalCell cellTit">
                                        <span><b>*</b>받으신는 분 이름</span>
                                    </div>
                                    <div className="modalCell">
                                        <input type="text" value={name} name="name" placeholder="이름을 입력해주세요." onChange={this.handleInput}  />
                                    </div>
                                </div>
                                <div className="modalRow">
                                    <div className="modalCell cellTit">
                                        <span><b>*</b>연락처</span>
                                    </div>
                                    <div className="modalCell">
                                        <input type="text" value={phone} name="phone" placeholder="-없이 입력해주세요." onChange={this.handleInput}/>
                                    </div>
                                </div>
                                <div className="modalRow">
                                    
                                    <div className="modalCell cellTit">
                                        <div>
                                            <span><b>*</b>주소</span>
                                        </div>
                                    </div>
                                    <div className="modalCell">
                                        <div className="cellFirst">
                                            <div className="zipCode">{zoneCode}</div>
                                            <button type="button" onClick={this.handleOpenPost} >
                                                <span>우편번호 찾기</span>
                                            </button>
                                        </div>
                                        {
                                            isDaumPost ?
                                                <DaumPostCode className="test"
                                                    onComplete={this.handleAddress}
                                                    autoClose
                                                    width={width}
                                                    height={height}
                                                    style={modalStyle}
                                                    isDaumPost={isDaumPost}
                                            />
                                            : null
                                        }
                                        <div className="address">{fullAddress}</div>
                                        <div className="addressBox">
                                            <input type="text" value={address} name="address" onChange={this.handleInput}/>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="messageGuide">
                                <span>배송 요청 메시지는 도착 희망일 설정 후 입력하실 수 있습니다.</span>
                            </div>
                            <div className="registeBox ">
                                <button type="button" className={(isRegister ? "registeActive" : "registeDisabled")} onClick={this.handleRegister}>
                                    <span>등록</span>
                                </button>
                            </div>
                            <div className="modalClose">
                                <button type="button" onClick={isModalClose}>X</button>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </>
        );
    }
}

export default AddressModal;