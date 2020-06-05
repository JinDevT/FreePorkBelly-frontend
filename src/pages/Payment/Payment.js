import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import AddressInfo from './AddressInfo/AddressInfo';
import CheckoutInfo from './CheckoutInfo/CheckoutInfo';
import Footer from '../../components/Footer/Footer';
import './Payment.scss';
class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage : true,
        }
    }

    handleAddress = () => {
        this.setState({
            stage: false
        });
    }

    handleCheckout = () => {
        this.setState({
            stage: true
        });
    }

    render() {
        const { stage } = this.state;
        return (
            <div className="Payment">
                <Header />
                <div className="container">
                    <div className="pageTitle">
                        <h1>주문하기</h1>
                    </div>
                    <div className="inner">
                        {
                            stage ? <AddressInfo stageChange={this.handleAddress} /> : <CheckoutInfo stageChange={this.handleCheckout} />
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Payment;