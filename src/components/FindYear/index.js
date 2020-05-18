import React from 'react';
import HtmlParser from '../HtmlParser';

const FindYear =(props) =>{
    console.log(props.movie)
    let year =''
    if(props.movie.hasOwnProperty("release_date") && props.movie.release_date !== ""){
        year = props.movie.release_date.slice(0, 4)
    } else {
        year = "[Unknown]" 
    }
    return(
    <div>
    {<HtmlParser text ={`Year of Release: <b>${year}</b>`}/>} 
    </div>
    )
}

export default FindYear