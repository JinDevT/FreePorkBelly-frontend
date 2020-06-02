import React, { Component } from 'react';
import ProductImages from "../List/ProductImages/ProductImages";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import './List.scss';

class List extends Component {
    state = {
        productList: []
    }

    // componentDidMount(){
    //     fetch("http://10.58.4.74:8000/product/category/0", {
    //         method: "GET", 
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(response => this.setState({
    //         productList: response
    //     }, () => console.log("response setState: ", this.state.productList)))
    // }

    // ${this.props.match.params.id}

    componentDidMount() {
        fetch("http://10.58.2.176:8000/product/category/0")
       .then(res => res.json())
       .then(res => this.setState({ productList: res}));
    }
  
        // componentDidUpdate(prevProps) {
        //   if ( prevProps.match.params.id !== this.props.match.params.id) {
        //     fetch('"http://10.58.2.176:8000/product/category/${this.props.match.params.id}'
        //   )
        //   .then(res => res.json())
        //   .then(res => this.setState({ productList: res}));
        // }



    render() {
        const { productList } = this.state;
        console.log("render: ", productList.products_info)
        return (
            <>
                <Header />
                    <div>
                        <img className="bestFresh" src="https://www.jeongyookgak.com/assets/list/01.png"/>
                    </div>
                    <div className="menu">
                        <div className="all" onClick={() => this.props.history.push("/url-parameters/5")}>전체보기</div>
                        <div className="pork" onClick={() => this.props.history.push("/1")}>돼지고기</div>
                        <div className="beef">소고기</div>
                        <div className="chicken">닭고기</div>
                        <div className="egg">달걀</div>
                        <div className="milk">우유</div>
                        <div className="baby">이유식</div>
                    </div>
                    <div className="showRoom">
                        {
                            productList.products_info && productList.products_info.map((product, index) => {
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