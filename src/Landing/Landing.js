import React, { Component } from "react";
import "./Landing.scss";
import Logo from "../asserts/pawprint.svg";
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
import NavBar from '../NavBar/NavBar';


export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSidenav: false,
      about_read_state: false,
      topbanner: true,
      booknow: false,
      placedatacall: false,
      photos: [],
      reviews:[]

    };
    this.booknow_toggle = this.booknow_toggle.bind(this);
    this.google_placecaller = this.google_placecaller.bind(this);
  }
// componentDidMount
componentDidMount() {
    let s =document.createElement('script')
    s.src="https://maps.googleapis.com/maps/api/js?key="+process.env.REACT_APP_PLACES_API+"&libraries=places"
    document.body.appendChild(s);
    s.addEventListener('load',() =>{
    this.google_placecaller();
  }) 
  }

  google_placecaller = () => {
    const google = window.google;
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 13.0702813, lng: 80.2064512 },
      zoom: 15
    });

    var request = {
      placeId: process.env.REACT_APP_PLACES_ID,
      fields: ['photo', 'reviews']
    };

    var service = new google.maps.places.PlacesService(map);
    service.getDetails(request, (res,status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ photos: res.photos });
        this.setState({ reviews: res.reviews });
        this.setState({ placedatacall: true });
      }
      else{
        console.log('Error while retreving photos and reviews');
      }
    });
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
        description: ` PetPaws is devoted to providing a safe, secure, and happy home for your pets in Chennai while you relax and take a short/long break. Our boarding locations are tailored to meet your pet's needs. PetPaws promises to create a memorable stay for your pet. We at PetPaws also help your pet make new friends and enjoy their vacation together.`,
        images: [{ Logo }, { Logo }, { Logo }],
        keyfacilities: ['Pick-Up And Drop', 'Healthy Food', 'Daily Walk', 'Regular Videos And Photos'],
        calltoaction: "Learn More",
        available: true
      },

      {
        offer: 0,
        title: "Day Care",
        logo: <img src={DayCareImg} className="icon" alt="sercice-icon" />,
        description: ` At PetPaws your pet's food is just the same as at home. Food is prepared fresh and with great care to make sure that it tastes and remains the same as what the pet is used to eating at home. All you have to do is to leave instructions with regard to your pet's eating habit and we make sure that when it comes to food, your pet will never miss home.`,
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
        <meta name="google-site-verification" content="V6-8gt-DJnGQQs6VR_8eKWxc2_2USo8Q_qPeqH4vREI" />
        {this.state.booknow && <BookNow booknowtoggle={this.booknow_toggle} />}
        <NavBar booknowtoggle={this.booknow_toggle} />
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
          <div className="section-title">Who We Are</div>
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
                PetPaws is a Home away from your home when you’re away, Pet
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
                PetPaws A Home away from your home when you’re away, PetPaws
                is a home based pet boarding service and also we have 2 adorable
                puggs named Simba and Chin-Chu to ensure that your pet does not
                feel alone in your absence. PetPaws offers unparalleled care
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
                PetPaws is home away from your home for your pet when you’re
                away. PetPaws is a home-based pet boarding service that offers
                unparalleled care and unexpected value in home-based dog
                boarding. Our in-house facility exceeds all standards to ensure
                the perfect environment for your pets by combining premium &
                personalized services to assure an incomparable peace of mind. Furthermore, we
                have two adorable pugs named Simba and Chin-Chu to ensure that
                your pet does not feel alone in your absence.
                <br />
                <br />
                <br />
                Our pledge to you is to provide your pets with the highest
                quality pet care available. We promise a safe, comfortable,
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
              We offer a wide variety of services to ensure all of your pet-related needs are not only met, but exceeded. These services include boarding, day care, and grooming. More information about these services is available below. You can always remain confident that our services are of the highest caliber.
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
              The main goals at PetPaws are to make the pet's stay as enjoyable as possible and to exceed our user's expactations. We believe that establishing a healthy relationship with our users in essential to acheiving these goals. Here are a few experiences from our users.
            </p>
          </div>
          {this.state.placedatacall && <ReviewBlock reviews={this.state.reviews} />}
        </div>
        <div id="gallery" className="Gallery">
          <div className="section-title">Gallery</div>
          <div className="horizaontal-line" />
          {this.state.placedatacall && <Gallery photos={this.state.photos} />}
        </div>
        <div id="contactus" className="Contact">
          <div className="section-title">Contact Us</div>
          <div className="horizaontal-line" />
          <ContactUs />
        </div>
        <Footer />
        <div id='map'></div>
      </div>
    );
  }
}
