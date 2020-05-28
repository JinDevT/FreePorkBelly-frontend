import React, { Component } from 'react';
import product from '../../Detail/productImg.jpg';
import './Product.scss';

class Product extends Component {
    options = [
        {
            id: 1,
            optionName: "보통(16mm)"
        },
        {
            id: 2,
            optionName: "얇게(11mm)"
        },
        {
            id: 3,
            optionName: "두껍게(18mm)"
        }
    ]
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            optionValue : this.options[0].optionName,
            selectOption : false,
        }
    }

    // 수량감소 버튼
    handleDecrease = () => {
        const { number } = this.state;
        if(number === 1) {
            return;
        } else if(number > 1) {
            this.setState({
                number: number - 1
            })
        }
    }

    // 수량증가 버튼
    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        })
    }

    // option open button
    openOption = () => {
        const { selectOption } = this.state;
        this.setState({
            selectOption: !selectOption
        })
    }

    // option value change
    handleOption = value =>{
        this.setState({
            optionValue: value
        }, () => this.openOption())
    }

    render() {
        const { number, optionValue, selectOption } = this.state;
        return (
            <div className="Product">
                <div className="productBox">
                    <div className="productImg">
                        <img src={product} alt="productImg"/>
                    </div>
                    <div className="productInfo">
                        <div className="infoTop">
                            <p className="topTit">초신선 돼지 삼겹살 구이용</p>
                            <p className="topSubTit">100g당 2,200원</p>
                            <p className="topPrice">기준가 13,200원 (600g)</p>
                        </div>
                        <div className="infoCenter">
                            <div className="productNum">
                                <span className="centerTit">수량</span>
                                <div className="centerBtn">
                                    <button type="button" className="decreaseBtn" onClick={this.handleDecrease}>-</button>
                                    <span className="number">{number}</span>
                                    <button type="button" onClick={this.handleIncrease}>+</button>
                                </div>
                            </div>
                            <div className="productNum productSelect">
                                <label className="centerTit">옵션</label>
                                <div className="centerBtn selectBox" onClick={this.openOption}>
                                    {optionValue}
                                </div>
                                <div className={"seletItems " + (selectOption ? "selectActive" : "selectHide")}> 
                                    {
                                        this.options.map((option, index) => {
                                            return (
                                                <div 
                                                    className="itemOption"
                                                    key={index}
                                                    onClick={() => this.handleOption(option.optionName)}
                                                >
                                                    {option.optionName}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="infoBottom">
                            <div className="bottomBtn">
                                <button type="button" className="buyBtn">
                                    <span>바로구매</span>
                                </button>
                            </div>
                            <div className="bottomBtn">
                                <button type="button" className="cartBtn">
                                    <span>장바구니</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="compareBox">
                    <p>옵션을 비교해보세요!</p>
                    <div className="compareInfo">
                        <img alt="optionCompare"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;