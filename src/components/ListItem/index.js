import React from 'react';
import HtmlParser from '../HtmlParser';
import ISO6391 from 'iso-639-1';
import ImageUrl from '../ImageUrl';
import NonEnglishName from '../NonEnglishName';

const ListItem =(props)=>{
    return(
    <div>
    <ImageUrl series={props.series} />
        <h2><b>{props.series.original_name}</b></h2>
            <h4>{<NonEnglishName series={props.series} />}</h4>
            {<HtmlParser text={props.series.overview} /> }
    <br /> <br />
            {<HtmlParser text={`Original language: <b>${ISO6391.getName(props.series.original_language)}</b>`} /> }
    <br /> <br />
    </div>
    )
}

export default ListItem;