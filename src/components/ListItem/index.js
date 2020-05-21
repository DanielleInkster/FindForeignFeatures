import React from 'react';
import Message from '../Message';
import ConvertISO from '../ConvertISO';
import ImageUrl from '../ImageUrl';
import Title from '../Title';
import NonEnglishName from '../NonEnglishName';
import FindYear from '../FindYear'


const ListItem =(props)=>{
    return(
        <div>
            <ImageUrl item={props.item} />
            <h2><Title item={props.item} type={props.type}/></h2>
            <hr/>
            <p><NonEnglishName item={props.item} type={props.type}/></p>
            <p><Message text={props.item.overview} /></p> 
            <p><FindYear item={props.item} type = {props.type}/></p>
            <p><ConvertISO language={props.item.original_language} /></p>
        </div>
    )
}

export default ListItem;