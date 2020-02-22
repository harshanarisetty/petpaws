import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import "./Gallery.scss";
export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }
  componentDidMount() {
    // console.log(this.props.photos);
    let photos_arr=[];    
    for(var photo in this.props.photos){
      photos_arr.push(
      <LazyLoad key={'lazy'+photo} id={photo} height={200} once>
        <img
          id={'img'+photo}
          
          src={this.props.photos[photo].getUrl()}
          alt="post"
        />
      </LazyLoad>)
    }
    this.setState({photos : photos_arr});
  }
  render() {
    return (
      <div className="gallery_wrapper">
        <span>
        Follow us on Instagram
          <a
            href="https://www.instagram.com/petpaws.petshomestay/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            @petpaws{" "}
          </a>
          in order to stay up to date and see what the pets are up to in our home.
        </span>
        <div className="gallery">{this.state.photos}</div>
      </div>
    );
  }
}
