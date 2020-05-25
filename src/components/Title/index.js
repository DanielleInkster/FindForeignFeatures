import React from 'react';



const Title =(props)=>{
    let searchTerm = props.type === 'tv' ? "original_name" : "original_title"
    return props.item[searchTerm].length < 20 ? props.item[searchTerm] : props.item[searchTerm].slice(0, 20) + '...' 
}

export default Title