import React, { Component } from 'react'
import './Landing.scss';
import Logo from '../asserts/logo.png';
import Pet from '../asserts/pet.jpg';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleSidenav: false
        };
        this.ham_toggler = this.ham_toggler.bind(this);
    }
    ham_toggler() {
        this.setState({ toggleSidenav: !this.state.toggleSidenav });
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
                <span className='main'>Finally a way to keep your buddy in <b>CHECK!</b></span>
                <img src={Pet} alt="pet" className="pet"></img>
                <span>

                </span>
            </div>

            </div>
        )
    }
}
