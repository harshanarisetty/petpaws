import React, { Component } from "react";
import "./ContactUs.scss";
import MaterialIcon from "material-icons-react";
export default class ContatUs extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="contact-container">
          <img
            className="bunny-stick"
            src="https://svgshare.com/i/EBn.svg"
            alt="bunny"
          />
          <div className="left">
            <div className="contactinfo">
              <span className="sub-title">Prefer the Phone?</span>
              <br />
              <span className="description">
                {" "}
                Call us today at{" "}
                <span className="sub-title-phone">
                  <a href="tel:9176156928"> 9176 156 928 </a>
                </span>{" "}
                with any questions you have or to book your pet.
              </span>
              <br />
              <br />

              <span className="sub-title">Address & Hours</span>
              <div className="row">
                <MaterialIcon icon="location_on" />
                <a
                  href="https://goo.gl/maps/4f3tjHfCVUgP1Wv37"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  2nd Main Rd,{"  "}Jai Nagar
                  <br />
                  Arumbakkam,{"  "}Chennai
                  <br />
                  Tamil Nadu 600106, {"  "} India
                </a>
              </div>
              <br />
              <div className="row">
                <MaterialIcon icon="local_phone" />
                <a href="tel:9176156928">9176156928</a>
              </div>
              <br />
              <div className="row">
                <MaterialIcon icon="email" />
                <a
                  href="mailto:reservation@petpaws.co.in?Subject=Reservation request email"
                  target="_top"
                >
                  reservation@petpaws.co.in
                </a>
              </div>
              <div className="working-hours">
                <div className="row">
                  <span className="days"> Mon - Fri</span>
                  <span className="hours">7am - 7pm</span>
                </div>
                <div className="row">
                  <span className="days"> Sat</span>
                  <span className="hours">7am - 4pm</span>
                </div>
                <div className="row">
                  <span className="days"> Sun</span>
                  <span className="hours">10am - 7pm</span>
                </div>
                <span className="description">
                  Tours available during office hours. No appointment necessary.
                </span>
              </div>
            </div>

            {/* <img src="https://svgshare.com/i/E6o.svg" alt="LandingImg" /> */}
          </div>
          <div className="right">
            <form>
              <label htmlFor="name">Name</label>
              <br />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John smith"
                required
              />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john.smith@gmail.com"
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
