import React, { Component } from "react";
import "./Services_card.scss";
import LazyLoad from "react-lazyload";
export default class Services_Card extends Component {
  render() {
    return (
      <div className="outerbox">
        {/* <div className="offer">
            <span>{this.props.data.offer}% off</span>
          </div> */}
        <br />
        <LazyLoad key='bunny' id='bunny' height={300} once>{this.props.data.logo}</LazyLoad>
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
