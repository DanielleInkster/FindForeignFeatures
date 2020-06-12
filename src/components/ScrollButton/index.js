//button created by Qbrid on Codepen

import React, {Component} from 'react';
import './ScrollButton.css'

class ScrollButton extends React.Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.scrollY === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.scrollY - this.props.scrollStepInPx);
    }

    scroll() {
        let intervalId = setInterval(this.scrollStep.bind(this));
        //store the intervalId inside the state, 
        //so we can use it later to cancel the scrolling
        this.setState({ intervalId: intervalId });
    }

    render() {
        return <button href='#' title='Back to top'
            id='scroll' className='scroll'
            onClick={(event) => {
                event.preventDefault();
                this.scroll();
            }}>
            <span id='arrow'>^</span>
        </button>;
    }
}

export default ScrollButton