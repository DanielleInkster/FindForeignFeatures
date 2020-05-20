import React from 'react';
import HtmlParser from '../HtmlParser';
import ConvertISO from '../ConvertISO';
import ImageUrl from '../ImageUrl';
import Title from '../Title';
import NonEnglishName from '../NonEnglishName';
import FindYear from '../FindYear'


const ListItem =(props)=>{
    return(
        <div>
            {console.log(props.item)}
            <ImageUrl item={props.item} />
            <h2><b><Title item={props.item} type={props.type}/></b></h2>
            <p><NonEnglishName item={props.item} type={props.type}/></p>
            <p><HtmlParser text={props.item.overview} /></p> 
            <p><FindYear item={props.item} type = {props.type}/></p>
            <p><ConvertISO language={props.item.original_language} /></p>
        </div>
    )
}

export default ListItem;