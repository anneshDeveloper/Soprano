import React, { Component } from "react";
//css
import "../../assets/css/demo-card.css";

class DemoCard extends Component {
  render() {
    const { image, name } = this.props;
    return (
      <div className="demo-card">
        <img src={image} className="demo-card-image" alt="demo-card-image" />
        <h3 className="demo-card-image-name">{name}</h3>
      </div>
    );
  }
}

export default DemoCard;
