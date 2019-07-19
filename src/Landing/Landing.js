import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Landing.scss";
import Logo from "../asserts/logo.png";
import ServiceCard from "../Services_Card/Services_card";
import ReviewBlock from "../Reviews/Reviews";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSidenav: false,
      about_read_state: false,
      topbanner: true
    };
    this.closetopbanner = this.closetopbanner.bind(this);
    this.ham_toggler = this.ham_toggler.bind(this);
    this.about_read_state = this.about_read_state.bind(this);
    this.closehammobile = this.closehammobile.bind(this);
    this.nav_items = this.nav_items.bind(this);
  }
  closehammobile() {
    console.log("closed");
    this.setState({ toggleSidenav: false });
  }
  closetopbanner() {
    this.setState({ topbanner: false });
  }
  ham_toggler() {
    this.setState({ toggleSidenav: !this.state.toggleSidenav });
  }
  about_read_state() {
    console.log("click registerd");
    this.setState({ about_read_state: !this.state.about_read_state });
  }
  nav_items() {
    return (
      <ul className="menu-items">
        <li>
          <Link
            activeClass="active"
            to="head"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={this.closehammobile}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={this.closehammobile}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={this.closehammobile}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="reviews"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={this.closehammobile}
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={this.closehammobile}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contactus"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={this.closehammobile}
          >
            Contact us
          </Link>
        </li>
        <li>
          <span className="wrap">
            <button className="button">BOOK NOW</button>
          </span>
        </li>
      </ul>
    );
  }
  render() {
    let data = [
      {
        offer: 20,
        title: "Boarding",
        logo: "https://image.flaticon.com/icons/svg/1499/1499532.svg",
        description: ` Pet paws is devoted to providing a safe, secure and happy home for your pets, in Chennai, while you relax and take a short/long break. Our boarding locations are tailored to meet your pet's needs. Pet Paws promises to create a memorable stay for your pet. We at Pet paws also help your pet to make new friends, so they can hang out altogether and enjoy their vacation.`,
        images: [{ Logo }, { Logo }, { Logo }],
        calltoaction: "Learn More",
        available: true
      },

      {
        offer: 20,
        title: "Day Care",
        logo: "https://image.flaticon.com/icons/svg/1499/1499539.svg",
        description: ` At Pet paws your pet's food is just the same as at home. Food is prepared fresh and with great care to make sure that it tastes and remains the same as what the pet is used to eating at home. All you need to do is to leave instructions with regard to your pet's eating habit and we would make sure that when it comes to food your pet never has to miss home.`,
        images: [{ Logo }, { Logo }, { Logo }],
        calltoaction: "Learn More",
        available: true
      },
      {
        offer: 20,
        title: "Grooming",
        logo: "https://image.flaticon.com/icons/svg/1499/1499518.svg",
        description: ` Comming Soon`,
        images: [{ Logo }, { Logo }, { Logo }],
        calltoaction: "Learn More",
        available: false
      }
    ];

    return (
      <div className="landing">
        <div id="top" className="navbar">
          {this.state.topbanner && (
            <div className="topbanner">
              <div className="row left">
                <a href="tel:9176156928">
                  <MaterialIcon icon="local_phone" color="#2EE59D" />
                </a>
                <a href="tel:9176156928">9176156928</a>
              </div>
              <div className="row right">
                <a
                  href="https://goo.gl/maps/4f3tjHfCVUgP1Wv37"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <MaterialIcon icon="directions" color="#2EE59D" />
                </a>
                <a
                  href="https://goo.gl/maps/4f3tjHfCVUgP1Wv37"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Directions
                </a>
              </div>
              <MaterialIcon
                onClick={this.closetopbanner}
                icon="close"
                id="topbannerclose"
                color="white"
              />
            </div>
          )}
          <div className="nav">
            <div className="brand">
              <img src={Logo} alt="logo" className="logo" />
              <span className="gap" />
              <span className="name">PetPaws</span>
            </div>
            <div
              className={this.state.toggleSidenav ? "ham active" : "ham"}
              onClick={this.ham_toggler}
            >
              <span className="ham-line-one" />
              <span className="ham-line-two" />
              <span className="ham-line-three" />
            </div>

            <div className="nav-list">{this.nav_items()}</div>
          </div>
          <div className="menubar">
            {this.state.toggleSidenav && (
              <div
                className={this.state.toggleSidenav ? "menu active" : "menu"}
              >
                {this.nav_items()}
              </div>
            )}
          </div>
        </div>
        <div className="spacer">&nbsp;</div>
        <div id="head" className="head">
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
        <div id="about" className="about">
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
              Pet Paws is home away from your home when you’re away, Pet paws is
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
        <div id="services" className="services">
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
        <div id="reviews" className="Reviews">
          <div className="section-title">Customer Reviews</div>
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
          <ReviewBlock />
        </div>
        <div id="gallery" className="Gallery">
          <div className="section-title">Gallery</div>
          <div className="horizaontal-line" />
          <Gallery />
        </div>
        <div id="contactus" className="Contact">
          <div className="section-title">Contact Us</div>
          <div className="horizaontal-line" />
          <ContactUs />
        </div>
        <Footer />
      </div>
    );
  }
}
