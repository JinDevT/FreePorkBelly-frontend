import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import ProductImages from "../Main/ProductImages/ProductImages";
import Footer from '../../../src/components/Footer/Footer';
import TopButton from "../Main/TopButton/TopButton"
import EventSlider from "./EventSlider/EventSlider"
import NoticeSlider from "./NoticeSlider/NoticeSlider"
import { API } from '../../../src/config'
import "./Main.scss";

class Main extends Component {

  state = {
    productList: []
}

scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

componentDidMount(){
    fetch(`${API}/product/main`, {
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
    // console.log("productList: ", this.state.productList)

<<<<<<< HEAD

  
=======
>>>>>>> d0db8ccc567f5bb078516aadad5fe4359bb15479
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
            <div className="noticeFirst"></div>
            <div className="noticeMiddle">
              <ul>
                <NoticeSlider />
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
                                        productId={product.product_id}
                                    />
                                );
                            })
                        }
          </div>
          <div className="goShop">
            <Link className="goShopping" to="/list">
              <button className="goShopping" onClick={this.scrollToTop}>쇼핑하러 가기</button>
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
