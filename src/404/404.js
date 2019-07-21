import React, { Component } from 'react';
import ErrorSVG from '../asserts/404.svg';
import { Link } from 'react-router-dom';
import './404.scss';
export default class Error404 extends Component {
    render() {
        return (

            <div className='wrapper_404'>
            <div className='container'>
                <img src={ErrorSVG} alt='img' />
                <div className='Messange'>
                    <span className='text'>
                        Page Not Found!
                        </span><br />
                    <span className="wrap">

                            <Link className="button" to="/">Home Page</Link>

                    </span>
                </div>
                </div>
            </div>
        )



    }
}