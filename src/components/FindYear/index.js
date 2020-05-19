import React from 'react';
import HtmlParser from '../HtmlParser';

const FindYear =(props) =>{
    let searchTerm =''
    props.type === 'tv' ? searchTerm = "first_air_date" : searchTerm = "release_date"

    let year =''
    if (props.movie.hasOwnProperty(searchTerm) && props.movie[searchTerm] !== ""){
        year = props.movie[searchTerm].slice(0, 4)
    } else {
        year = "[Unknown]" 
    }
    return(
        <HtmlParser text ={`Year of Release: <b>${year}</b>`}/>
    )
}

export default FindYear