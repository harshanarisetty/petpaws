import React, { Component } from 'react'
import './Landing.scss';
import Logo from '../asserts/logo.png';


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
        this.setState({ about_read_state: !this.state.about_read_state })
    }

    render() {
        return (
            <div className="landing">
                <div className="navbar">
                    <div className="nav">
                        <div className="brand">
                            <img src={Logo} alt="logo" className="logo"></img>
                            <span className='gap'></span>
                            <span className="name">PetPaws</span>
                            <div className={this.state.toggleSidenav ? "ham active" : "ham"} onClick={this.ham_toggler}>
                                <span className="ham-line-one"></span>
                                <span className="ham-line-two"></span>
                                <span className="ham-line-three"></span>
                            </div>
                        </div>

                    </div>

                    <div className="menubar">
                        {this.state.toggleSidenav &&
                            <div className={this.state.toggleSidenav ? "menu active" : "menu"}>
                                <ul className="menu-items">
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>Book now</li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <div className="head">
                    {/* <span className="main">Finally</span><br/>
                <span className="sub-main">a way to keep your buddy</span><br/>
                <span className="check">in CHECK!</span> */}
                    <div className='main'>Finally a way to keep your buddy in<br /> <b className="check">CHECK!</b></div>
                    <div className='calltoaction'>
                        <span className="wrap">
                            <button className="button">BOOK NOW</button>
                        </span>

                        <span className="wrap">
                            <button className="button sec">Learn more..</button>
                        </span>
                    </div>
                </div>
                <div className='about'>
                    <div className="section-title">Who are we</div>
                    <div className='horizaontal-line'></div>
                    <div className='content'>
                        {

                            !this.state.about_read_state ?
                                <div className="small_content">
                                    Pet Paws is a Home away from your home when you’re away, Pet paws is a home based pet boarding service and also we have 2 adorable puggies named Simba and Chin-Chu.....
                         <span className="about_read_state" onClick={this.about_read_state}>show more..</span>
                                </div>

                                : <div className="full_content">

                                    Pet Paws A Home away from your home when you’re away, Pet paws is a home based pet boarding service and also we have 2 adorable puggies named Simba and Chin-Chu to ensure that your pet does not feel alone in your absence. Pet Paws offers unparalleled care and unexpected value in home based dog boarding. Our in-house facility exceeds all standards to ensure the perfect environment for your pets. By combining premium & personalized services to assured incomparable peace of mind.
                    <br /><br /><br />
                                    Our pledge to you is to provide your pets with the highest quality pet care available today. We promise a safe, comfortable and fun-filled experience for each one of our furry friends with while their parents are away.
                    <span className="about_read_state" onClick={this.about_read_state}>show less..</span>
                                </div>
                        }
                    </div>
                    <div className="services">
                        <div className="section-title">Services</div>
                        <div className='horizaontal-line'></div>
                        <div className="cards">

                            <div className='card'>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
