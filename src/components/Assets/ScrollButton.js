//button created by Qbrid on Codepen

import React, { Component } from "react";
import upButton from "../../Images/up.png";
import "../../stylesheets/Assets/ScrollButton.css";

class ScrollButton extends Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
  }

  scrollStep() {
    if (window.scrollY === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.scrollY - this.props.scrollStepInPx);
  }

  scroll() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button
        href="#"
        title="Back to top"
        id="scroll"
        className="scroll"
        onClick={(event) => {
          event.preventDefault();
          this.scroll();
        }}
      >
        <span id="arrow">
          <img src={upButton} alt="Scroll to Top" id="up" />
        </span>
      </button>
    );
  }
}
export default ScrollButton;
