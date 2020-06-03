import React, { Component } from 'react';
import ProductImages from "../List/ProductImages/ProductImages";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { API } from '../../config';
import './List.scss';

class List extends Component {
    state = {
        productList: []
    }

    componentDidMount(){
        this.getData();
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.location.search !== this.props.location.search) {
            this.getData();
        }
    }

    getData = () => {
        const queryId = this.props.location.search;
        console.log("query ID: ", queryId);

        fetch(`${API}/product${queryId}`)
        .then(response => response.json())
        // .then(res => console.log(res.products_info))
        .then(response => this.setState({
            productList: response.products_info
        }));
    }
        


    render() {
        const { productList } = this.state;
        // console.log("render: ", productList.products_info);
        console.log("productList: ", this.state.productList);
        return (
            <>
                <Header />
                    <div>
                        <img className="bestFresh" src="https://www.jeongyookgak.com/assets/list/01.png"/>
                    </div>
                    <div className="menu">
                        <div className="all" onClick={() => this.props.history.push("/product")}>전체보기</div>
                        <div className="pork" onClick={() => this.props.history.push("/product?category_id=1")}>돼지고기</div>
                        <div className="beef" onClick={() => this.props.history.push("/product?category_id=2")}>소고기</div>
                        <div className="chicken" onClick={() => this.props.history.push("/product?category_id=3")}>닭고기</div>
                        <div className="egg" onClick={() => this.props.history.push("/product?category_id=4")}>달걀</div>
                        <div className="milk" onClick={() => this.props.history.push("/product?category_id=5")}>우유</div>
                        <div className="baby" onClick={() => this.props.history.push("/product?category_id=6")}>이유식</div>
                    </div>
                    <div className="showRoom">
                        {
                            productList && productList.map((product, index) => {
                                return (
                                    <ProductImages 
                                        key={index}
                                        imgUrl={product.sub_img_url}
                                        name={product.name}
                                        salesPrice={product.sales_price_comment}
                                        unitPrice={product.unit_price_comment}
                                    />
                                );
                            })
                        }
                    </div>
                <Footer />
            </>
        );
    }
}

export default List;