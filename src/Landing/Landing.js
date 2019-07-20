import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import { Link } from "react-scroll";
import "./Landing.scss";
import Logo from "../asserts/logo.png";
import ServiceCard from "../Services_Card/Services_card";
import ReviewBlock from "../Reviews/Reviews";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import BookNow from "../Booknow/Booknow";
import { TweenMax, Linear, TimelineMax } from "gsap/TweenMax";
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSidenav: false,
      about_read_state: false,
      topbanner: true,
      booknow: false
    };
    this.booknow_toggle = this.booknow_toggle.bind(this);
    this.closetopbanner = this.closetopbanner.bind(this);
    this.ham_toggler = this.ham_toggler.bind(this);
    this.about_read_state = this.about_read_state.bind(this);
    this.closehammobile = this.closehammobile.bind(this);
    this.nav_items = this.nav_items.bind(this);
  }

  componentDidMount() {
    setTimeout(
      function() {
        //Start the timer
        this.closetopbanner(); //After 1 second, set render to true
      }.bind(this),
      5000
    );
    this.dog_animation();
  }

  dog_animation() {
    var select = function(s) {
        return document.querySelector(s);
      },
      dog_container = select(".dog_container"),
      nose = select(".nose"),
      browL = select("#browL"),
      browR = select("#browR"),
      landing = select(".landing"),
      eyeSpinL = select("#eyeSpinL"),
      eyeSpinR = select("#eyeSpinR"),
      stageWidth = 600,
      stageHeight = stageWidth,
      mousePos = { x: 0, y: 0 };
    TweenMax.set("svg", {
      visibility: "visible"
    });
    TweenMax.set([nose, ".eye"], {
      transformOrigin: "50% 50%"
    });
    TweenMax.set(browL, {
      transformOrigin: "0% 50%"
    });
    TweenMax.set(browR, {
      transformOrigin: "100% 150%"
    });
    TweenMax.set([eyeSpinL, eyeSpinR], {
      transformOrigin: "65% 50%"
    });
    var eyeMaxY = 1;
    var browMaxY = 2;
    var browMaxRot = 0;
    var snoutMinY = 2;
    var noseMaxY = 12;
    var noseShineTL = new TimelineMax({ paused: true });
    noseShineTL
      .fromTo(
        "#noseShine",
        1,
        {
          drawSVG: "0% 20%"
        },
        {
          drawSVG: "0% 50%",
          ease: Linear.easeNone
        }
      )
      .to("#noseShine", 1, {
        drawSVG: "40% 60%",
        ease: Linear.easeNone
      })
      .to("#noseShine", 1, {
        drawSVG: "80% 100%",
        ease: Linear.easeNone
      });
    landing.onmousemove = function(e) {
      mousePos.x = (stageWidth / 2 - e.offsetX) * -1;
      mousePos.y = (stageHeight / 2 - e.offsetY) * -1;
      TweenMax.to("#eyeGroup", 1, {
        x: mousePos.x / 20,
        y: mousePos.y / 12 > eyeMaxY ? eyeMaxY : mousePos.y / 12
      });
      TweenMax.to(browL, 1, {
        rotation: mousePos.y / 25 > browMaxRot ? browMaxRot : mousePos.y / 25
      });
      TweenMax.to(browR, 1, {
        rotation: -(mousePos.y / 15 > browMaxRot)
          ? -browMaxRot
          : -mousePos.y / 15
      });
      TweenMax.to("#browGroup", 1, {
        x: mousePos.x / 40,
        y: mousePos.y / 25 > browMaxY ? browMaxY : mousePos.y / 25
      });
      TweenMax.to("#snout", 1, {
        x: mousePos.x / 30,
        y: mousePos.y / 60 < snoutMinY ? snoutMinY : mousePos.y / 60
      });
      TweenMax.to("#nose", 1, {
        x: mousePos.x / 8,
        y: mousePos.y / 10 > noseMaxY ? noseMaxY : mousePos.y / 10
      });
      TweenMax.to("#earL", 1, {
        x: -(mousePos.x / 50),
        y: -(mousePos.y / 50)
      });
      TweenMax.to("#earR", 1, {
        x: -(mousePos.x / 50),
        y: -(mousePos.y / 50)
      });
      TweenMax.to("#dogGroup", 1, {
        x: mousePos.x / 23,
        y: mousePos.y / 23
      });
      TweenMax.set(noseShineTL, {
        time:
          noseShineTL.duration() -
          (e.offsetX / stageWidth) * noseShineTL.duration()
      });
    };
    // function blink() {
    //   TweenMax.to(".eye", 0.1, {
    //     attr: {
    //       ry: 0
    //     },
    //     repeat: 1,
    //     yoyo: true,
    //     onComplete: blink,
    //     delay: Math.random() * 1
    //   });
    // }
    function sniff() {
      TweenMax.to("#nose", 0.1, {
        scaleX: 1.1,
        repeat: 1,
        yoyo: true,
        onComplete: sniff,
        delay: Math.random()
      });
    }
    dog_container.addEventListener("click", function(e) {
      // blink();
      TweenMax.to([eyeSpinL, eyeSpinR], 1, {
        rotation: "+=720",
        onUpdate: function() {
          TweenMax.set(".eye", {
            rotation: -eyeSpinL._gsTransform.rotation
          });
        }
      });
    });
    // blink();
    sniff();
    landing.onmousemove({ offsetX: 100, offsetY: 100 });
  }
  booknow_toggle() {
    console.log("Book now");
    this.setState({ booknow: !this.state.booknow });
  }
  closehammobile() {
    this.setState({ toggleSidenav: false });
  }
  closetopbanner() {
    this.setState({ topbanner: false });
  }
  ham_toggler() {
    this.setState({ toggleSidenav: !this.state.toggleSidenav });
  }
  about_read_state() {
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
            <button onClick={this.booknow_toggle} className="button">
              BOOK NOW
            </button>
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
        description: ` Coming Soon`,
        images: [{ Logo }, { Logo }, { Logo }],
        calltoaction: "Learn More",
        available: false
      }
    ];

    return (
      <div className="landing">
        {this.state.booknow && <BookNow booknowtoggle={this.booknow_toggle} />}
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
                <button onClick={this.booknow_toggle} className="button">
                  BOOK NOW
                </button>
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
          <div className="about-grid">
            <div className="dog">
              <div class="dog_container ">
                <svg className="dogSVG" viewBox="100 100 400 400">
                  <g id="dogGroup">
                    <rect
                      id="earL"
                      x="207"
                      y="220"
                      width="31"
                      height="187"
                      rx="15"
                      ry="15"
                      fill="#CC6A49"
                    />
                    <rect
                      id="earR"
                      x="361"
                      y="220.94"
                      width="31"
                      height="187"
                      rx="15.7"
                      ry="15.7"
                      fill="#CC6A49"
                    />
                    <ellipse
                      id="head"
                      cx="301"
                      cy="285"
                      rx="86"
                      ry="94"
                      fill="#E69C53"
                    />
                    <rect
                      id="earLTOP"
                      x="207"
                      y="220"
                      width="31"
                      height="187"
                      rx="15"
                      ry="15"
                      fill="#CC6A49"
                    />
                    <rect
                      id="earRTOP"
                      x="361"
                      y="220.94"
                      width="31"
                      height="187"
                      rx="15.7"
                      ry="15.7"
                      fill="#CC6A49"
                    />
                    <rect
                      id="snout"
                      x="239"
                      y="294"
                      width="121"
                      height="84.98"
                      rx="42"
                      ry="42"
                      fill="#F1F4E4"
                    />
                    <g id="nose">
                      <rect
                        x="276"
                        y="325"
                        width="46"
                        height="23"
                        rx="11"
                        ry="11"
                        fill="#443F43"
                      />
                      <path
                        id="noseShine"
                        fill="none"
                        stroke="#AAABAF"
                        stroke-width="4"
                        stroke-linecap="round"
                        d="
    M282.1,337.7L282.1,337.7c0-4.2,3.4-7.6,7.6-7.6h20.4c4.2,0,7.6,3.4,7.6,7.6l0,0"
                      />
                    </g>

                    <g id="browGroup" stroke="#443F43" stroke-linecap="round">
                      <line
                        id="browL"
                        x1="250"
                        y1="253"
                        x2="290"
                        y2="253"
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="7"
                      />
                      <line
                        id="browR"
                        x1="309"
                        y1="253"
                        x2="349"
                        y2="253"
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="7"
                      />
                    </g>
                    <g id="eyeGroup" fill="#443F43">
                      <g id="eyeSpinL">
                        <ellipse
                          id="eyeL"
                          class="eye"
                          cx="270"
                          cy="285"
                          rx="7"
                          ry="7"
                        />
                      </g>
                      <g id="eyeSpinR">
                        <ellipse
                          id="eyeR"
                          class="eye"
                          cx="329"
                          cy="285"
                          rx="7"
                          ry="7"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
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
                Pet Paws is home away from your home for your pet when you’re
                away, Pet paws is a home based pet boarding service and also we
                have 2 adorable puggs named Simba and Chin-Chu to ensure that
                your pet does not feel alone in your absence. Pet Paws offers
                unparalleled care and unexpected value in home based dog
                boarding. Our in-house facility exceeds all standards to ensure
                the perfect environment for your pets by combining premium &
                personalized services to assure an incomparable peace of mind.
                <br />
                <br />
                <br />
                Our pledge to you is to provide your pets with the highest
                quality pet care available today. We promise a safe, comfortable
                and fun-filled experience for each one of our furry friends
                while their parents are away.
                {/* <span
                  className="about_read_state"
                  onClick={this.about_read_state}
                >
                  show less..
                </span> */}
              </div>
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
