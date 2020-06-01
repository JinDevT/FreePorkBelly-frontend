import React, { Component } from 'react';
import './Product.scss';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            optionValue : "",
            selectOption : false,
            productDetail : [],
            options : []
        }
    }

    componentDidMount() {
        fetch("http://10.58.4.74:8000/product/detail/1",  {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })
        .then(res => res.json())
        .then(res => this.setState({
            productDetail : res.product_detail,
            optionValue : res.product_detail.option_list[0],
            options : res.product_detail.option_list
        }))
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
        const { number, optionValue, selectOption, productDetail, options } = this.state;
        return (
            <div className="Product">
                <div className="productBox">
                    <div className="productImg">
                        <img src={productDetail.main_img_url} alt="productImg"/>
                    </div>
                    <div className="productInfo">
                        <div className="infoTop">
                            <p className="topTit">{productDetail.name}</p>
                            <p className="topSubTit">{productDetail.sales_price_comment}</p>
                            <p className="topPrice">{productDetail.unit_price_comment}</p>
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
                                        options.map((option, index) => {
                                            return (
                                                <div 
                                                    className="itemOption"
                                                    key={index}
                                                    onClick={() => this.handleOption(option)}
                                                >
                                                    {option}
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
                {
                    productDetail.option_img_url ? (
                        <div className="compareBox">
                            <p>옵션을 비교해보세요!</p>
                            <div className="compareInfo">
                                <img src={productDetail.option_img_url} alt="optionCompare"/>
                            </div>
                        </div>
                    ) : (null)
                }
            </div>
        );
    }
}

export default Product;