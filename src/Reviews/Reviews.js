import React, { Component } from "react";

import "./Reviews.scss";
export default class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [
        {
          review:
            " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,",
          name: "Harsha Narisetty"
        },
        {
          review:
            "Hendrerit in vulputate velit esse molestie consequat duis autem vel eum iriure dolor.",
          name: "Narisetty Harsha"
        }
      ],
      length: 1,
      initial: 0
    };
  }

  render() {
    return (
      <div className="wrapper">
        <div className="review-card">
          <div
            className="review-control"
            id="back"
            onClick={() => {
              if (this.state.initial + 1 <= this.state.length) {
                this.setState({ initial: this.state.initial + 1 });
              } else {
                this.setState({ initial: 0 });
              }
            }}
          >
            <img src="https://image.flaticon.com/icons/svg/52/52284.svg" />
          </div>

          <div className="review-block">
            <div className="review">
              {this.state.reviews[this.state.initial].review}
            </div>
            <div className="horizaontal-line" />
            <div className="reviewer">
              {this.state.reviews[this.state.initial].name}
            </div>
          </div>

          <div
            className="review-control"
            onClick={() => {
              if (this.state.initial - 1 >= 0) {
                this.setState({ initial: this.state.initial - 1 });
              } else {
                this.setState({ initial: this.state.length });
              }
            }}
            id="next"
          >
            <img src="https://image.flaticon.com/icons/svg/52/52284.svg" />
          </div>
        </div>
      </div>
    );
  }
}
