import React, { Component } from "react";

import "./Landing.scss";
import Logo from "../asserts/logo.png";
import ServiceCard from "../Services_Card/Services_card";
import ReviewBlock from "../Reviews/Reviews";
import ContactUs from "../ContactUs/ContactUs";
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSidenav: false,
      about_read_state: false
    };

    this.ham_toggler = this.ham_toggler.bind(this);
    this.about_read_state = this.about_read_state.bind(this);
  }
  ham_toggler() {
    this.setState({ toggleSidenav: !this.state.toggleSidenav });
  }
  about_read_state() {
    console.log("click registerd");
    this.setState({ about_read_state: !this.state.about_read_state });
  }

  render() {
    let data = [
      {
        offer: 20,
        title: "Boarding",
        logo: "https://image.flaticon.com/icons/svg/1499/1499532.svg",
        description: ` Duis autem vel eum iriure dolor in hendrerit in vulputate velit
      esse molestie consequat, vel illum dolore eu feugiat nulla
      facilisis at vero eros et accumsan et iusto odio dignissim qui
      blandit praesent luptatum zzril delenit augue duis dolore te
      feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
      adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
      laoreet dolore magna aliquam erat volutpat.`,
        images: [{ Logo }, { Logo }, { Logo }],
        calltoaction: "Learn More"
      },
      {
        offer: 20,
        title: "Grooming",
        logo: "https://image.flaticon.com/icons/svg/1499/1499518.svg",
        description: ` Duis autem vel eum iriure dolor in hendrerit in vulputate velit
      esse molestie consequat, vel illum dolore eu feugiat nulla
      facilisis at vero eros et accumsan et iusto odio dignissim qui
      blandit praesent luptatum zzril delenit augue duis dolore te
      feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
      adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
      laoreet dolore magna aliquam erat volutpat.`,
        images: [{ Logo }, { Logo }, { Logo }],
        calltoaction: "Learn More"
      },
      {
        offer: 20,
        title: "Day Care",
        logo: "https://image.flaticon.com/icons/svg/1499/1499539.svg",
        description: ` Duis autem vel eum iriure dolor in hendrerit in vulputate velit
      esse molestie consequat, vel illum dolore eu feugiat nulla
      facilisis at vero eros et accumsan et iusto odio dignissim qui
      blandit praesent luptatum zzril delenit augue duis dolore te
      feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
      adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
      laoreet dolore magna aliquam erat volutpat.`,
        images: [{ Logo }, { Logo }, { Logo }],
        calltoaction: "Learn More"
      }
    ];
    return (
      <div className="landing">
        <div className="navbar">
          <div className="nav">
            <div className="brand">
              <img src={Logo} alt="logo" className="logo" />
              <span className="gap" />
              <span className="name">PetPaws</span>
              <div
                className={this.state.toggleSidenav ? "ham active" : "ham"}
                onClick={this.ham_toggler}
              >
                <span className="ham-line-one" />
                <span className="ham-line-two" />
                <span className="ham-line-three" />
              </div>
            </div>
          </div>

          <div className="menubar">
            {this.state.toggleSidenav && (
              <div
                className={this.state.toggleSidenav ? "menu active" : "menu"}
              >
                <ul className="menu-items">
                  <li>Home</li>
                  <li>About us</li>
                  <li>Services</li>
                  <li>Reviews</li>
                  <li>Gallery</li>
                  <li>Contact us</li>
                  <li>Book now</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="head">
          <div className="right">
            <img src="https://svgshare.com/i/E6o.svg" alt="LandingImg" />
          </div>
          <div className="left">
            <div className="main">
              Finally a way to keep your buddy in
              <br /> <b className="check">CHECK!</b>
            </div>
            <div className="calltoaction">
              <span className="wrap">
                <button className="button">BOOK NOW</button>
              </span>

              {/* <span className="wrap">
                <button className="button sec">Learn more..</button>
              </span> */}
            </div>
          </div>
        </div>
        <div className="about">
          <div className="section-title">Who are we</div>
          <div className="horizaontal-line" />
          <div className="content">
            {/* {!this.state.about_read_state ? (
              <div className="small_content">
                Pet Paws is a Home away from your home when you’re away, Pet
                paws is a home based pet boarding service and also we have 2
                adorable puggies named Simba and Chin-Chu.....
                <span
                  className="about_read_state"
                  onClick={this.about_read_state}
                >
                  show more..
                </span>
              </div>
            ) : (
              <div className="full_content">
                Pet Paws A Home away from your home when you’re away, Pet paws
                is a home based pet boarding service and also we have 2 adorable
                puggs named Simba and Chin-Chu to ensure that your pet does not
                feel alone in your absence. Pet Paws offers unparalleled care
                and unexpected value in home based dog boarding. Our in-house
                facility exceeds all standards to ensure the perfect environment
                for your pets by combining premium & personalized services to
                assure an incomparable peace of mind.
                <br />
                <br />
                <br />
                Our pledge to you is to provide your pets with the highest
                quality pet care available today. We promise a safe, comfortable
                and fun-filled experience for each one of our furry friends
                while their parents are away.
                <span
                  className="about_read_state"
                  onClick={this.about_read_state}
                >
                  show less..
                </span>
              </div>
            )} */}
            <div className="full_content">
              Pet Paws A Home away from your home when you’re away, Pet paws is
              a home based pet boarding service and also we have 2 adorable
              puggs named Simba and Chin-Chu to ensure that your pet does not
              feel alone in your absence. Pet Paws offers unparalleled care and
              unexpected value in home based dog boarding. Our in-house facility
              exceeds all standards to ensure the perfect environment for your
              pets by combining premium & personalized services to assure an
              incomparable peace of mind.
              <br />
              <br />
              <br />
              Our pledge to you is to provide your pets with the highest quality
              pet care available today. We promise a safe, comfortable and
              fun-filled experience for each one of our furry friends while
              their parents are away.
              {/* <span
                  className="about_read_state"
                  onClick={this.about_read_state}
                >
                  show less..
                </span> */}
            </div>
          </div>
        </div>
        <div className="services">
          <div className="section-title">Services</div>
          <div className="horizaontal-line" />
          <div className="section-description">
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, Duis autem vel eum iriure dolor in
              hendrerit in vulputate velit esse molestie consequat,Duis autem
              vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat,
            </p>
          </div>
          <div className="cards">
            <ServiceCard data={data[0]} />
            <ServiceCard data={data[1]} />
            <ServiceCard data={data[2]} />
          </div>
        </div>

        <div className="Reviews">
          <div className="section-title">Customer Reviews</div>
          <div className="horizaontal-line" />
          <ReviewBlock />
        </div>

        <div className="Contact">
          <div className="section-title">Contact Us</div>
          <div className="horizaontal-line" />
          <ContactUs />
        </div>
      </div>
    );
  }
}
