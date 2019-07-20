import React, { Component } from "react";
import "./Services_card.scss";
export default class Services_Card extends Component {
  render() {
    return (
      <div className="outerbox">
        {/* <div className="offer">
            <span>{this.props.data.offer}% off</span>
          </div> */}
        <br />
        {this.props.data.logo}
        <div className="title">{this.props.data.title}</div>

        {this.props.data.available ? (
          <div>
            <div className="description">
              <p>{this.props.data.description}</p>
            </div>
            <div className="calltoaction">
              <span className="wrap">
                <button className="button sec">
                  {this.props.data.calltoaction}
                </button>
              </span>
            </div>
          </div>
        ) : (
          <div className="comming-soon">{this.props.data.description}</div>
        )}
      </div>
    );
  }
}
