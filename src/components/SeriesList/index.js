import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

 const imageUrl = (img) =>  {
     return img != null ? `https://image.tmdb.org/t/p/w500/${img}` : 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
}

const SeriesList = (props) =>{
    return(
        <div> {props.list.map(series =>
            <li style={{ listStyleType: "none" }}>
                <img src={imageUrl(series.poster_path)} alt={series.original_name+" poster."} width="20%" height="40%"/>
                <br/>
                <h3><b>{series.original_name}</b></h3>
                {ReactHtmlParser(series.overview)}
                <br/>
                Rating: 
                <b>{series.vote_average}</b>
                <br />
                <br />
            </li>)}
        </div>
    )
}
export default SeriesList;