import React from 'react';
import HtmlParser from '../HtmlParser';
import ISO6391 from 'iso-639-1';
import ImageUrl from '../ImageUrl';
import NonEnglishName from '../NonEnglishName';

const ListItem =(props)=>{
    return(
    <div>
            <ImageUrl movie={props.movie} />
            <h2><b>{props.movie.original_name}</b></h2>
            {<HtmlParser text={`Year of Release: <b>${props.movie.release_date.slice(0,4)}</b>`} />}
            <h4>{<NonEnglishName movie={props.movie} />}</h4>
            {<HtmlParser text={props.movie.overview} /> }
    <br /> 
            {<HtmlParser text={`Original language: <b>${ISO6391.getName(props.movie.original_language)}</b>`} /> }
    <br /> <br />
    </div>
    )
}

export default ListItem;