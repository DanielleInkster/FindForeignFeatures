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
                <h3><b>{series.show.name}</b></h3>
                {ReactHtmlParser(series.show.summary)}
                Rating: 
                <b>{series.show.rating.average}</b>
                <br />
                <br />
            </li>)}
        </div>
    )
}
export default SeriesList;