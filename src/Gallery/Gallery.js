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
          Do chek out our instagram
          <a
            href="https://www.instagram.com/harshanarisetty"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            @petpaws{" "}
          </a>
          for more images
        </span>
        <div className="gallery">{this.state.photos}</div>
      </div>
    );
  }
}
