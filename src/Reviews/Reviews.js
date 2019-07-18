import React, { Component } from "react";
import "./Reviews.scss";
export default class Reviews extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="review-card">
          <div className="review-control" id="back">
            <img src="https://image.flaticon.com/icons/svg/52/52284.svg" />
          </div>

          <div className="review-block">
            <div className="review">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat,
            </div>
            <div className="horizaontal-line" />
            <div className="reviewer">Harsha Narisetty</div>
          </div>

          <div className="review-control" id="next">
            <img src="https://image.flaticon.com/icons/svg/52/52284.svg" />
          </div>
        </div>
      </div>
    );
  }
}
