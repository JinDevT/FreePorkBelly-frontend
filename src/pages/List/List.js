import React, { Component } from 'react';
import ProductImages from "../List/ProductImages/ProductImages";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { API } from '../../config';
import ListPageImg from './ListPageImg/ListPageImg';
import './List.scss';

class List extends Component {
    state = {
        productList: [],
        listPageImg: []
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
        // console.log("query ID: ", queryId);

        fetch(`${API}/product${queryId}`)
        .then(response => response.json())
        // .then(res => console.log(res.products_info))
        .then(response => this.setState({
            productList: response.products_info,
            listPageImg: response.category_info
        }
        // , () => {console.log("listPageImage : ", response.category_info.image_url)}
        ));
    }

    render() {
        const { productList } = this.state;
        const { listPageImg } = this.state;
    
        return (
            <>
                <Header />
                    <div>
                        <ListPageImg 
                            ListPageUrl={listPageImg.image_url}
                        />
                    </div>
                    <div className="menu">
                        <div className="all" onClick={() => this.props.history.push("/list")}>전체보기</div>
                        <div className="pork" onClick={() => this.props.history.push("?category_id=1")}>돼지고기</div>
                        <div className="beef" onClick={() => this.props.history.push("?category_id=2")}>소고기</div>
                        <div className="chicken" onClick={() => this.props.history.push("?category_id=3")}>닭고기</div>
                        <div className="egg" onClick={() => this.props.history.push("?category_id=4")}>달걀</div>
                        <div className="milk" onClick={() => this.props.history.push("?category_id=5")}>우유</div>
                        <div className="baby" onClick={() => this.props.history.push("?category_id=6")}>이유식</div>
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
                                        productId={product.product_id}
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