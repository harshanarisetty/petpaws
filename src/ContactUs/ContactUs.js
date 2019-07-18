import React, { Component } from "react";
import "./ContactUs.scss";
export default class ContatUs extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="contact-container">
          <div className="left">
            <img src="https://svgshare.com/i/E6o.svg" alt="LandingImg" />
          </div>
          <div className="right">
            <form>
              <label htmlFor="email">Email</label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="abcd@gmail.com"
                required
              />
              <br />
              <label htmlFor="phone">Mobile number</label>
              <br />
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                required
                placeholder="8930-123-123"
              />
              <br />
              <label htmlFor="question">Query</label>
              <br />
              <textarea
                rows="5"
                placeholder="Enter you question here.."
                type="text-area"
                id="question"
                name="question"
              />
              <br />
              <input type="checkbox" id="press-me" />

              <label htmlFor="press-me">
                <span />
                Want to know offers and updated from us!
              </label>
              <br />
              <span className="wrap">
                <button className="button">Submit</button>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
