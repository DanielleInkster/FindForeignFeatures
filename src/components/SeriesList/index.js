import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

 const imageUrl = (img) =>  {
     return img != null ? img.medium : 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
}

const SeriesList = (props) =>{
    return(
        <div> {props.list.map(series =>
            <li style={{ listStyleType: "none" }}>
                <img src={imageUrl(series.show.image) } />
                <br/>
                <h3><b>{series.show.name}</b></h3>
                {ReactHtmlParser(series.show.summary)}
                <br/>
                Rating: 
                <b>{series.show.rating.average}</b>
                <br />
                <br />
            </li>)}
        </div>
    )
}
export default SeriesList;