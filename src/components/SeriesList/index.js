import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

const SeriesList = (props) =>{
    return(
        <div> {props.list.map(series =>
            <li>
                <img src={series.show.image.medium} />
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