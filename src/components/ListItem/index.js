import React from 'react';
import HtmlParser from '../HtmlParser';
import ISO6391 from 'iso-639-1';
import ImageUrl from '../ImageUrl';
import NonEnglishName from '../NonEnglishName';
import FindYear from '../FindYear'


const ListItem =(props)=>{
    return(
    <div>
        <ImageUrl movie={props.movie} />
        <h2><b>{props.movie.original_title}</b></h2>
        <p><NonEnglishName movie={props.movie} /></p>
        <p><HtmlParser text={props.movie.overview} /></p> 
        <p><FindYear movie={props.movie} /></p>
        <p><HtmlParser text={`Original language: <b>${ISO6391.getName(props.movie.original_language)}</b>`} /></p>
    </div>
    )
}

export default ListItem;