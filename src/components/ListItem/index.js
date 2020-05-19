import React from 'react';
import HtmlParser from '../HtmlParser';
import ConvertISO from '../ConvertISO';
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
        <p><FindYear movie={props.movie} type = {props.type}/></p>
        <p><ConvertISO language={props.movie.original_language} /></p>
    </div>
    )
}

export default ListItem;