import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

 const imageUrl = (img) =>  {
     return img != null ? `https://image.tmdb.org/t/p/w500/${img}` : 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
}

const nonEnglishName = (name)=>{
    if (name.name != name.original_name) return `Engligh Title: ${name.name}` 
}

const checkForNull = (props) =>{
    return props.list === null ? true : false
}

const SeriesList = (props) =>{
    if (checkForNull(props) === false) {
    return(
        <div> {props.list.map(series =>
            <li style={{ listStyleType: "none" }}>
                <img src={imageUrl(series.poster_path)} alt={series.original_name+" poster."} width="20%" height="40%"/>
                <br/>
                <h2><b>{series.original_name}</b></h2>
                <h4>{nonEnglishName(series)}</h4>
                {ReactHtmlParser(series.overview)}
                <br/>
                Rating: 
                <b>{series.vote_average}</b>
                <br />
                <br />
            </li>)}
        </div>
    )
    } else {
        return (
        <div>
            <h1>No results found. Please try another series.</h1>
        </div>
        )
    }
}
export default SeriesList;