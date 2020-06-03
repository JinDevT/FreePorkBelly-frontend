import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './EventSlider.scss'


export default class EventSlider extends Component {
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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="EventSlider">
        <Slider {...settings}>
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/jyg-custom.appspot.com/o/p%2Fm%2F1589856703009_PC_index_%EC%84%9C%EB%B8%8C%EB%B0%B0%EB%84%88_810x320(%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EC%BF%A0%ED%8F%B0)%20(2).png?alt=media&token=ee8750c3-c00a-406f-b27f-d6bf6edd35f9" 
                   alt="babyMeal" />
            </div>
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/jyg-custom.appspot.com/o/p%2Fm%2F1590971482216_PC_index_%EC%84%9C%EB%B8%8C%EB%B0%B0%EB%84%88_810x320%20(4).png?alt=media&token=d9b5e855-1fd4-4603-a4fd-7149eff42648" 
                   alt="inviteFriend" />
            </div>
            <div>
              <img src="https://firebasestorage.googleapis.com/v0/b/jyg-custom.appspot.com/o/p%2Fm%2F1584922210747_200113_%EC%95%B1%EC%B6%9C%EC%8B%9C_PC_index_%EC%84%9C%EB%B8%8C%EB%B0%B0%EB%84%88_810x320.png?alt=media&token=7f67debe-2e89-485a-8404-a9be56003f90" 
                   alt="appEvent" />
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

