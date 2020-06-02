import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import ProductImages from "../Main/ProductImages/ProductImages";
import Footer from '../../../src/components/Footer/Footer';
import FixedHeader from "../../components/Header/FixedHeader/FixedHeader";
import TopButton from "../Main/TopButton/TopButton"
import "./Main.scss";

class Main extends Component {

  state = {
    productList: []
}



componentDidMount(){
    fetch("http://10.58.2.176:8000/product/main", {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(response => this.setState({
        productList: response.data
    }))
}

  render() {
    const { productList } = this.state;
    // console.log("render:", productList.products_info)
    console.log("productList: ", this.state.productList)



    return (
      <div>
        <Header />
        
        <main className="main">
          <div className="mainPagePork">
            <img
              alt="mainPagePork"
              src="https://www.jeongyookgak.com/assets/index/freemain.jpg"
            />
          </div>
          <div className="event">
            <div className="animatedEvent">
              <ul>
                <li>
                  <img
                    alt="animatedOne"
                    src="https://firebasestorage.googleapis.com/v0/b/jyg-custom.appspot.com/o/p%2Fm%2F1584922210747_200113_%EC%95%B1%EC%B6%9C%EC%8B%9C_PC_index_%EC%84%9C%EB%B8%8C%EB%B0%B0%EB%84%88_810x320.png?alt=media&token=7f67debe-2e89-485a-8404-a9be56003f90"
                  />
                </li>
              </ul>
            </div>
            <div className="staticEvent">
              <img
                alt="staticEvent"
                src="https://www.jeongyookgak.com/assets/index/plan_1.png"
              />
            </div>
          </div>
          <div className="notice">
            <div className="noticeHead">공지사항</div>
            <div className="noticeMiddle">
              <ul>
                <li>스킨 포장 안내 </li>
              </ul>
            </div>
            <div className="noticeLast">더보기</div>
          </div>
          <div className="bestProduct">베스트상품</div>
          <div className="prodcutImagesContainer">
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
          <div className="goShop">
            <Link className="goShopping" to="/list">
              <button className="goShopping">쇼핑하러 가기</button>
            </Link>
          </div>
        </main>
        <TopButton/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
