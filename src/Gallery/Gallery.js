import React, { Component } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";
import "./Gallery.scss";
export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      photos: [
        <img
          className="loading"
          src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
          alt="placeholder>"
        />,
        <img
          className="loading"
          src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
          alt="placeholder>"
        />,
        <img
          className="loading"
          src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
          alt="placeholder>"
        />,
        <img
          className="loading"
          src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
          alt="placeholder>"
        />,
        <img
          className="loading"
          src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
          alt="placeholder>"
        />,
        <img
          className="loading"
          src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
          alt="placeholder>"
        />,
        <img
          className="loading"
          src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
          alt="placeholder>"
        />,
        <img
          className="loading"
          src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
          alt="placeholder>"
        />,
        <img
          className="loading"
          src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
          alt="placeholder>"
        />,
        <img
          className="loading"
          src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
          alt="placeholder>"
        />,
        <img
          className="loading"
          src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
          alt="placeholder>"
        />
      ]
    };
  }
  componentDidMount() {
    let images = [];
    axios
      .get("https://www.instagram.com/harshanarisetty/?__a=1")
      .then(response => {
        response.data.graphql.user.edge_owner_to_timeline_media.edges.forEach(
          element => {
            let s = "lazy" + element.node.id;
            images.push(
              <LazyLoad id={s} height={200} once>
                <img
                  id={element.node.id}
                  src={element.node.display_url}
                  alt="post"
                />
              </LazyLoad>
            );
          }
        );
        this.setState({ photos: images });
      });
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
