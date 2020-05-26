import React, { Component } from "react";
import "./Main.scss";
import Header from "../../components/Header/Header";
import ProductImages from "../../components/ProductImages/ProductImages";

class Main extends Component {
  render() {
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
            <ProductImages />
            <ProductImages />
            <ProductImages />
            <ProductImages />
            <ProductImages />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
