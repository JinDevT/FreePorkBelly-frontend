import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Modal from '../Modal/Modal';
import './ReviewCmt.scss';

const body = document.getElementsByTagName('body')[0];
class ReviewCmt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalShow: false,
            reviewList: []
        }
    }

    componentDidMount() {
        const API = "http://10.58.0.24:8000";
        const token = localStorage.getItem("access_token");
        fetch(`${API}/product/review/${this.props.match.params.id}`,  {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization" : token
            },
        })
        .then(res => res.json())
        .then(res => this.setState({
            reviewList : res.review
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
        const { reviewList } = this.state;
        console.log("review: ", reviewList );
        return (
            <>
                <div className="ReviewCmt" onClick={this.openModal}>
                    <div className="contents">
                        <div className="inner">
                            {
                                reviewList && reviewList.map((rev, index) => {
                                    return (
                                    <div className="revBox" key={index}>
                                        <div className="contentTit">
                                            {rev.title}
                                        </div>
                                        <div className="contentSubT">
                                            <span>{rev.comment}</span>
                                        </div>
                                        <div className="contentUser">
                                            <div className="userInfo">
                                                <span className="userId">wecode</span>
                                                <span className="buyNum">10회구매</span>
                                            </div>
                                            <div className="userDate">
                                                <span className="buyDate">{rev.created_at}</span>
                                            </div>
                                        </div>
                                        <div className="togetherInfo">
                                            <div className="togetherTit">
                                                <span>함께 구매하신 상품</span>
                                            </div>
                                            <div className="togetherName">
                                                <span>{rev.product_name}</span>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <Modal isModalShow={this.state.isModalShow} isModalClose={this.closeModal} reviewList={reviewList} />
            </>
        );
    }
}

export default withRouter(ReviewCmt);