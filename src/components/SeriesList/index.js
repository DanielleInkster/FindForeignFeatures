import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

 const imageUrl = (img) =>  {
     return img != null ? img.medium : null
}

const SeriesList = (props) =>{
    return(
        <div> {props.list.map(series =>
            <li>
                <img src={imageUrl(series.show.image) } />
                <br/>
                {series.show.name}
                <br />
                {ReactHtmlParser(series.show.summary)}
                <br />
                Rating: 
                <b>{series.show.rating.average}</b>
                <br />
            </li>)}
        </div>
    )
}
export default SeriesList;