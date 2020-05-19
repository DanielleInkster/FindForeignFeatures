import React from 'react';

const Title =(props)=>{
    let searchTerm = ''
    props.type === 'tv' ? searchTerm = "original_name" : searchTerm = "original_title"
    return props.movie[searchTerm] 
}

export default Title