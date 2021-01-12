import React, { Component, Fragment } from "react";
//css
import "../../assets/css/button.css";

class Button extends Component {
  render() {
    const { bg, font, text, icon,iconName } = this.props;
    return (
      <Fragment>
        <button className={`button ${font} ${bg} ${icon?'button-text-small':'button-text'}`}>{text}</button>
        {icon && <i className={`${iconName} button-icon`}></i>}
      </Fragment>
    );
  }
}

export default Button;
