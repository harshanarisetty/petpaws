import React, { Component } from "react";
import Arrrow from '../asserts/arrow.svg';
import "./Reviews.scss";
import StarRatingComponent from 'react-star-rating-component';
export default class Reviews extends Component {
  constructor() {
    
    super();
    
    this.state = {
      reviews: {},
      length: 4,
      initial: 0
    };
  }
  componentWillMount(){
    this.setState({reviews : this.props.reviews});

  }

  render() {
    return (
      <div className="wrapper">
        <div className="review-card">
          <div
            className="review-control"
            id="back"
            onClick={() => {
              if (this.state.initial + 1 <= this.state.length) {
                this.setState({ initial: this.state.initial + 1 });
              } else {
                this.setState({ initial: 0 });
              }
            }}
          >
            <img src={Arrrow} alt='arrow' />
          </div>

          <div className="review-block">
            <a href={this.state.reviews[this.state.initial].author_url}><div className='left'>
              <img className='reviewer-logo' src={this.state.reviews[this.state.initial].profile_photo_url} alt='reviewer-pic'></img>
              <p className='reviewer'>{this.state.reviews[this.state.initial].author_name}</p>
            <StarRatingComponent
              name="rate1"  
              starCount={5}
              value={this.state.reviews[this.state.initial].rating}
              editing={false}
            />
            </div>
            </a>
          
            <div className="review">
              {this.state.reviews[this.state.initial].text}
            </div>
            {/* <div className="horizaontal-line" />
            <div className="reviewer">
              {this.state.reviews[this.state.initial].name}
            </div> */}
          
          </div>

          <div
            className="review-control"
            onClick={() => {
              if (this.state.initial - 1 >= 0) {
                this.setState({ initial: this.state.initial - 1 });
              } else {
                this.setState({ initial: this.state.length });
              }
            }}
            id="next"
          >
            <img src={Arrrow} alt='arrow' />
          </div>
        </div>
      </div>
    );
  }
}
