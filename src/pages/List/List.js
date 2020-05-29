import React, { Component } from 'react';
import ProductImages from "../../components/ProductImages/ProductImages";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import './List.scss';

class List extends Component {
    render() {
        return (
            <>
            <Header />
                <img className="bestFresh" src="https://www.jeongyookgak.com/assets/list/01.png"/>
                <div className="menu">
                    <div className="all">전체보기</div>
                    <div className="pork">돼지고기</div>
                    <div className="beef">소고기</div>
                    <div className="chicken">닭고기</div>
                    <div className="egg">달걀</div>
                    <div className="milk">우유</div>
                    <div className="baby">이유식</div>
                </div>
                <div className="showRoom">
                <ProductImages />
                <ProductImages />
                <ProductImages />
                <ProductImages />
                <ProductImages />
                <ProductImages />
                </div>
            {/* <Footer /> */}
            </>
        );
    }
}

export default List;