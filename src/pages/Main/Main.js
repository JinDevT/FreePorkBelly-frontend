import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import ProductImages from "../Main/ProductImages/ProductImages";
import Footer from '../../../src/components/Footer/Footer';
import TopButton from "../Main/TopButton/TopButton"
import EventSlider from "./EventSlider/EventSlider"
import "./Main.scss";

class Main extends Component {

  state = {
    productList: []
}



componentDidMount(){
    fetch("http://10.58.0.134:8000/product/main", {
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
              <EventSlider />
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
