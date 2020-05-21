import React from 'react';
import './index.css';

const Button = (props) => {
    return <input className="Button" type="submit" value={props.value} onClick={ props.onClick } />
}


export default Button;