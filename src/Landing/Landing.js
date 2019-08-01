import React, { Component } from "react";
import "./Landing.scss";
import Logo from "../asserts/logo.png";
import GroomingImg from '../asserts/grooming.svg';
import BoardingImg from '../asserts/boarding.svg';
import DayCareImg from '../asserts/daycare.svg';
import LandingImg from '../asserts/landing.svg';
import ServiceCard from "../Services_Card/Services_card";
import ReviewBlock from "../Reviews/Reviews";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import BookNow from "../Booknow/Booknow";
import DogAnimation from '../DogAnimation/DogAnimation';
import axios from "axios";
import NavBar from '../NavBar/NavBar';
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSidenav: false,
      about_read_state: false,
      topbanner: true,
      booknow: false,
      placedatacall:false,
      placedata:''

    };
    this.booknow_toggle = this.booknow_toggle.bind(this);
  }

  componentWillMount(){
    const places_url = "https://maps.googleapis.com/maps/api/place/details/json?placeid="+process.env.REACT_APP_PLACES_ID +"&fields=photo,reviews&key="+process.env.REACT_APP_PLACES_API;
    axios
      .get(places_url)
      .then(res => {
          this.setState({ placedata : res.data.result});
      })
      .then(res => {
        this.setState({ placedatacall : true});
    })
      .catch(err =>{
        console.log(err);
      })
    
  }
  
  booknow_toggle() {
    
    this.setState({ booknow: !this.state.booknow });
  }

  render() {
    let data = [
      {
        offer: 0,
        title: "Boarding",
        logo: <img src={BoardingImg} className="icon" alt="sercice-icon" />,
        description: ` Petpaws is devoted to providing a safe, secure and happy home for your pets, in Chennai, while you relax and take a short/long break. Our boarding locations are tailored to meet your pet's needs. Petpaws promises to create a memorable stay for your pet. We at Petpaws also help your pet to make new friends, so they can hang out altogether and enjoy their vacation.`,
        images: [{ Logo }, { Logo }, { Logo }],
        keyfacilities: ['Pick-Up And Drop', 'Healthy Food', 'Daily Walk', 'Regular Videos And Photos'],
        calltoaction: "Learn More",
        available: true
      },

      {
        offer: 0,
        title: "Day Care",
        logo: <img src={DayCareImg} className="icon" alt="sercice-icon" />,
        description: ` At Petpaws your pet's food is just the same as at home. Food is prepared fresh and with great care to make sure that it tastes and remains the same as what the pet is used to eating at home. All you need to do is to leave instructions with regard to your pet's eating habit and we would make sure that when it comes to food your pet never has to miss home.`,
        images: [{ Logo }, { Logo }, { Logo }],
        keyfacilities: ['Clean Environment', 'Freindly Mates', 'Gaming Activity', 'Regular Videos And Photos'],
        calltoaction: "Learn More",
        available: true
      },
      {
        offer: 0,
        title: "Grooming",
        logo: <img src={GroomingImg} className="icon" alt="sercice-icon" />,
        description: ` Coming Soon`,
        images: [{ Logo }, { Logo }, { Logo }],
        calltoaction: "Learn More",
        available: false
      }
    ];

    return (
      <div className="landing">
        {this.state.booknow && <BookNow booknowtoggle={this.booknow_toggle} />}
        <NavBar booknowtoggle={this.booknow_toggle}/>
        <div className="spacer">&nbsp;</div>
        <div id="head" className="head">
          
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
            </div>
          </div>

          <div className="right">
            <img src={LandingImg} alt="LandingImg" />
          </div>
        </div>
        <div id="about" className="about">
          <div className="section-title">Who are we</div>
          <div className="horizaontal-line" />
          <div className="about-grid">
            <div className="dog">
              <div className="dog_container ">
                <DogAnimation />
              </div>
            </div>
            <div className="content">
              {/* {!this.state.about_read_state ? (
              <div className="small_content">
                Petpaws is a Home away from your home when you’re away, Pet
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
                Petpaws A Home away from your home when you’re away, Petpaws
                is a home based pet boarding service and also we have 2 adorable
                puggs named Simba and Chin-Chu to ensure that your pet does not
                feel alone in your absence. Petpaws offers unparalleled care
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
                Petpaws is home away from your home for your pet when you’re
                away, Petpaws is a home based pet boarding service and also we
                have 2 adorable pugs named Simba and Chin-Chu to ensure that
                your pet does not feel alone in your absence. Petpaws offers
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
        {this.state.placedatacall && <ReviewBlock reviews={this.state.placedata.reviews}/>}
        </div>
        <div id="gallery" className="Gallery">
          <div className="section-title">Gallery</div>
          <div className="horizaontal-line" />
          {this.state.placedatacall && <Gallery photos={this.state.placedata.photos}/>}
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
