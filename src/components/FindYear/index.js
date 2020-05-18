import React from 'react';
import HtmlParser from '../HtmlParser';

const FindYear =(props) =>{
    let year =''
    if(props.movie.hasOwnProperty("release_date") && props.movie.release_date !== ""){
        year = props.movie.release_date.slice(0, 4)
    } else {
        year = "[Unknown]" 
    }
    return(
        <HtmlParser text ={`Year of Release: <b>${year}</b>`}/>
    )
}

export default FindYear