import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Product from './Product/Product';
import TabContainer from './TabContainer/TabContainer';
import Tab from './Tab/Tab';
import Explicate from './Explicate/Explicate';
import ReviewCmt from './ReviewCmt/ReivewCmt';
import ProductInfo from './ProductInfo/ProductInfo';
import Footer from '../../components/Footer/Footer';
import { API } from '../../config';
import './Detail.scss';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
    }

    componentDidMount() {
        fetch(`${API}/product/${this.props.match.params.id}`,  {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })
        .then(res => res.json()).catch(err => console.log("err: ", err));
    }

    updateIndex = index => {
        this.setState({ index });
    }
    
    render() {
        const { index, productInfo } = this.state;
       
        return (
            <div className="Detail">
                <Header />
                    <div className="container">
                        <section className="cont1">
                            <Product productInfo={productInfo}/>
                        </section>
                        <section className="contBox cont2">
                            <TabContainer index={index} updateIndex={this.updateIndex}>
                                <Tab title="상품설명" className="listBox">
                                    <Explicate />
                                </Tab>
                                <Tab title="상품리뷰" className="listBox">
                                    <ReviewCmt />
                                </Tab>
                                <Tab title="상품정보안내" className="listBox">
                                    <ProductInfo />
                                </Tab>
                            </TabContainer> 
                        </section>
                    </div>
                <Footer />
            </div>
        );
    }
};

export default Detail;