import React from 'react';
import './button.css';

const Button = (props) => {
    return <input className="Button" type="submit" value={props.value} onClick={ props.onClick } />
}


export default Button;