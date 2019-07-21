import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import "./Footer.scss";
import Logo from "../asserts/logo.png";
import LazyLoad from "react-lazyload";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-about">
            <img className="foot-logo" src={Logo} alt="logo" />
            <span className="foot-brand">PetPaws</span>
            <p className="foot-description">
              Our pledge to you is to provide your pets with the highest quality
              pet care available today. We promise a safe, comfortable and
              fun-filled experience for each one of our furry friends while
              their parents are away.
            </p>
          </div>
          <div className="Services">
            <span>Services</span>
            <ul>
              <li>Boarding</li>
              <li>Groming</li>
              <li>Day Care</li>
            </ul>
          </div>
          <div className="contactinfo">
            <span>Contact Information</span>
            <div className="row">
              <MaterialIcon color="white" icon="location_on" />
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
            <div className="row">
              <MaterialIcon color="white" icon="local_phone" />
              <a href="tel:9176156928">9176156928</a>
            </div>
            <div className="row">
              <MaterialIcon color="white" icon="email" />
              <a
                href="mailto:contactus@petpaws.co.in?Subject=Contact us email"
                target="_top"
              >
                contactus@petpaws.co.in
              </a>
            </div>
          </div>
          <div className="Map">
          <LazyLoad key='map_foot' id='map_foot' height={200} once>
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.435858714779!2d80.20438025119174!3d13.071540190745175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266a3ac2814d7%3A0x70270bf794a85c84!2sJai+Nagar+2nd+Main+Rd%2C+Jai+Nagar%2C+Arumbakkam%2C+Chennai%2C+Tamil+Nadu+600106%2C+India!5e0!3m2!1sen!2sus!4v1563473190274!5m2!1sen!2sus"
            /></LazyLoad>
          </div>
        </div>
      </div>
    );
  }
}
