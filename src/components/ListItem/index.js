import React from 'react';
import ConvertISO from '../ConvertISO';
import ImageUrl from '../ImageUrl';
import Title from '../Title';
import NonEnglishName from '../NonEnglishName';
import FindYear from '../FindYear'


const ListItem =(props)=>{
    return(
        <div id = "text">
            <ImageUrl item={props.item} />
            <h2><Title item={props.item} type={props.type}/></h2>
            <hr/>
            <p><NonEnglishName item={props.item} type={props.type}/></p>
            <p><FindYear item={props.item} type = {props.type}/></p>
            <p><ConvertISO language={props.item.original_language} /></p>
        </div>
    )
}

export default ListItem;