import React, { Component } from 'react'
import { Link } from "react-scroll";
import { Link as RouteLink, withRouter } from "react-router-dom";

import Logo from "../asserts/pawprint.svg";
import "./NabBar.scss";
import MaterialIcon from "material-icons-react";
import BookNow from "../Booknow/Booknow";

const NavBarComponent = withRouter(props => <NavBar {...props} />);

class NavBar extends Component {

    constructor() {
        super();

        this.state = {
            toggleSidenav: false,
            about_read_state: false,
            topbanner: true,
            booknow: false,
            landinpage: false

        };
        this.booknow_toggle = this.booknow_toggle.bind(this);
        this.closetopbanner = this.closetopbanner.bind(this);
        this.ham_toggler = this.ham_toggler.bind(this);
        this.about_read_state = this.about_read_state.bind(this);
        this.closehammobile = this.closehammobile.bind(this);
        this.nav_items = this.nav_items.bind(this);
    }

    componentWillMount() {
        if (this.props.location.pathname === '/')
            this.setState({ landinpage: true })
    }
    componentDidMount() {
        setTimeout(
            function () {
                //Start the timer
                this.closetopbanner(); //After 1 second, set render to true
            }.bind(this),
            5000
        );
    }

    booknow_toggle() {
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
                    {this.state.landinpage ?
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
              </Link> :
                        <RouteLink className='Navlink' onClick={this.closehammobile}
                            to='/'> Home </RouteLink>

                    }
                </li>
                <li>
                {this.state.landinpage ?
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
                    :
                    <RouteLink className='Navlink' to='/'> About us </RouteLink>
                    
                    }
                </li>
                <li>
                {this.state.landinpage ?
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
                        
                    </Link>:
                    <RouteLink className='Navlink' to='/'> Services </RouteLink>}


                </li>
                <li>
                {this.state.landinpage ?
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
                       
                    </Link>: <RouteLink className='Navlink' to='/'> Reviews</RouteLink>}
                </li>
                <li>
                {this.state.landinpage ?
                    <Link
                        activeClass="active"
                        to="gallery"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={this.closehammobile}
                    > Gallery
                        
                    </Link>:<RouteLink className='Navlink' to='/'> Gallery</RouteLink>}
                </li>
                <li>
                {this.state.landinpage ?
                    <Link
                        activeClass="active"
                        to="contactus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={this.closehammobile}
                    > Contact us
                        
                    </Link>:<RouteLink className='Navlink' to='/'> Contact us</RouteLink>}
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
        return (
            <div>
                {this.state.booknow && <BookNow booknowtoggle={this.booknow_toggle} />}
                <div id="top" className="navbar">
                    {this.state.topbanner && (
                        <div className="topbanner">
                            <div className="row left">
                                <a href="tel:091761 63928">
                                    <MaterialIcon icon="local_phone" color="#2EE59D" />
                                </a>
                                <a href="tel:091761 63928">091761 63928</a>
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
            </div>
        )
    }
}


export default NavBarComponent;