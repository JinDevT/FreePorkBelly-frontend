import React, { Component } from "react";
import "./ListPageImg.scss";

class ListPageImg extends Component {
  render() {
    const { ListPageUrl } = this.props;
    return (
      <div>
        <div className="MainPageImgContainer">
          <img
            className="MainPageImg"
            alt="MainPageImg"
            src={ListPageUrl}
          />
        </div>
      </div>
    );
  }
}

export default ListPageImg;