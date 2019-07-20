import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import "./Booknow.scss";
export default class BookNow extends Component {
  render() {
    return (
      <div className="booknow-wrapper" onClick={this.props.booknowtoggle}>
        <div className="container" onClick={e => e.stopPropagation()}>
          <MaterialIcon
            icon="close"
            id="topbannerclose"
            color="black"
            onClick={this.props.booknowtoggle}
          />
          <div className="left">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/515/362/large_2x/walk-the-dog-vector.png"
              alt="pet"
            />
          </div>
          <div className="contactinfo right">
            <span className="sub-title">
              Sorry!, right now we are taking bookings only by phone or email
            </span>
            <br />
            <span className="description">
              {" "}
              Call us today at{" "}
              <span className="sub-title-phone">
                <a href="tel:9176156928"> 9176 156 928 </a>
              </span>{" "}
              with any questions you have or to book your reservation.
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
        </div>
      </div>
    );
  }
}
