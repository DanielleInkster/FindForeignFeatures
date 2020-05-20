import React from 'react';

const Title =(props)=>{
    let searchTerm = props.type === 'tv' ? "original_name" : "original_title"
    return props.item[searchTerm] 
}

export default Title