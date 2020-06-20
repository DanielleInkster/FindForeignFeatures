import React from 'react';
import HtmlParser from './HtmlParser';

const FindYear =(props) =>{
    let searchTerm =props.type === 'tv' ?  "first_air_date" :  "release_date"

    let year = (props.item.hasOwnProperty(searchTerm) && props.item[searchTerm] !== "") ? 
    props.item[searchTerm].slice(0, 4) : "[Unknown]" 
  
    return(
        <HtmlParser text ={`Year of Release: <b>${year}</b>`}/>
    )
}
export default FindYear