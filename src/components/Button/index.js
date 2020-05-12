import React from 'react';

const Button = (props) => {
    return <input type="submit" value={props.value} onClick={ props.onClick } />
}


export default Button;