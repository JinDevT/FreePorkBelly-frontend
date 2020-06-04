import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './NoticeSlider.scss'


export default class NoticeSlider extends Component {
  // constructor(props) {
  //   super(props);
  //   this.next = this.next.bind(this);
  //   this.previous = this.previous.bind(this);
  // }
  // next() {
  //   this.slider.slickNext();
  // }
  // previous() {
  //   this.slider.slickPrev();
  // }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      vertical: true,
      
    };
    return (
      <div className="NoticeSlider">
        <Slider ref={c => (this.slider = c)} {...settings}>
            <div>
                <li>스킨 포장 안내 </li>
            </div>
            <div>
                <li>정육각 이용 가이드 </li>
            </div>
        </Slider>
            {/* <div>
              <button className="button" onClick={this.previous}>
                Previous
              </button>
              <button className="button" onClick={this.next}>
                Next
              </button>
            </div> */}
      </div>
    );
  }
}

