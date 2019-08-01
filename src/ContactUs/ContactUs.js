import React, { Component } from "react";
import "./ContactUs.scss";
import LazyLoad from "react-lazyload";
import BunnyImg from '../asserts/bunny.png';
import SuccessDog from '../asserts/success.png';
import MaterialIcon from "material-icons-react";
import firebase from 'firebase/app';
import Firebase from '../Firebase/firebase';
export default class ContatUs extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      phone:'',
      question:'',
      updates:true,
      Submited:false
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.clearstate = this.clearstate.bind(this);
  }
  
  clearstate = () =>{
    this.setState({name:'',
    email:'',
    phone:'',
    question:'',
    updates:true})
  }

  formHandler = (e) => {
    e.preventDefault();
    this.setState({Submited : true});
    const data={
      name:this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      question:this.state.question,
      updates:this.state.updates,
      timestamp:firebase.database.ServerValue.TIMESTAMP
    }
    
    if(this.state.updates){
      const updates_data={
        name:this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      timestamp:firebase.database.ServerValue.TIMESTAMP
      }  
      Firebase.database().ref('Email List').push(updates_data)
      .then(res => {
        console.log("Successfully added to Email list");
      })
      .catch(err => {
        console.log(err);
      })
    }

    
    Firebase.database().ref('ContactUS').push(data)
    .then( res => {
      console.log('Query received Successfully');
        this.clearstate();
        this.setState({Submited : true});
    }).catch(err =>{
      console.log(err);
    })

  };
  
  changeHandler = (e) => {
    if(!e.target.name){
      this.setState({ updates : !this.state.updates});
    }
    else
      this.setState({ [e.target.name] : e.target.value});
};
  render() {

    return (
      <div className="wrapper">
        <div className="contact-container">
        <LazyLoad key='bunny' id='bunny' height={300} once>
          <img
            className="bunny-stick"
            src={BunnyImg}
            alt="bunny"
          />
          </LazyLoad>
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
                <a href="tel:09176163928">091761 63928</a>
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
           {!this.state.Submited ? <form onSubmit={this.formHandler}>
              <label htmlFor="name">Name <MaterialIcon id='required' icon="star" color='red'/></label>
              <br />
              <input
                id="name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.changeHandler}
                placeholder="John smith"
                required
              />
              <br />
              
              <label htmlFor="email">Email <MaterialIcon id='required' icon="star" color='red'/></label>
              <br />
              <input
                id="email"
                name="email"
                value={this.state.email}
                type="email"
                onChange={this.changeHandler}
                placeholder="john.smith@gmail.com"
                required
              />
              <br />
              <label htmlFor="phone">Mobile number <MaterialIcon id='required' icon="star" color='red'/></label>
              <br />
              <input
                type="tel"
                id="phone"
                value={this.state.phone}
                name="phone"
                pattern="[0-9]{10}"
                required
                onChange={this.changeHandler}
                placeholder="8930123123"
                title="Phone number should have 10 digits."
              />
              <br />
              <label htmlFor="question">Query</label>
              <br />
              <textarea
                rows="5"
                value={this.state.question}
                placeholder="Enter you question here.."
                id="question"
                onChange={this.changeHandler}
                name="question"
              />
              <br />
              
              <input defaultChecked type="checkbox" id="press-me" />
              <label name='updates' onClick={this.changeHandler} htmlFor="press-me" >
                <span  />
                <p  className='text_check'>Want to know offers and updates from us!</p>
              </label>

              <br />
              <span className="wrap">
                <button type='submit' className="button">Submit</button>
              </span>
            </form>
            : <LazyLoad key='success' id='success' height={100} once><img src={SuccessDog} className='fadeIn' alt='success'/></LazyLoad>
           }
          </div>
        </div>
      </div>
    );
  }
}
