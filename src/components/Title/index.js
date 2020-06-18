// eslint-disable-next-line
import React from 'react';

const Title =(props)=>{
    let searchTerm = props.type === 'tv' ? "original_name" : "original_title"
    return props.item[searchTerm].length < 25 ? props.item[searchTerm] : props.item[searchTerm].slice(0,25)+"..."
}

export default Title