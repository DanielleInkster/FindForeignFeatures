//button created by Qbrid on Codepen

import React, { Component } from 'react';
import './ScrollButton.css'

class MediaScrollButton extends Component {
  
    scrollStep(direction) {
        if(direction === 'up'){
            window.scrollBy({
                top: -3000,
                left: 100,
                behavior: 'smooth'
            })
        } else {
            window.scrollBy({
                top:  3000,
                left: 100,
                behavior: 'smooth'
            })
        }
    }

    render() {
        return <button href='#' title='Back to top'
            id='scroll' className='scroll'
            onClick={(event) => {
                event.preventDefault();
                this.scrollStep(this.props.direction);
            }}>
            <span id='arrow'>^</span>
        </button>;
    }
}
export default MediaScrollButton