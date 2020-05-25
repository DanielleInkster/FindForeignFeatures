import React from 'react';
import ConvertISO from '../ConvertISO';
import ImageUrl from '../ImageUrl';
import Title from '../Title';
import NonEnglishName from '../NonEnglishName';
import FindYear from '../FindYear'


const ListItem =(props)=>{
    return(
        <div >
            <ImageUrl item={props.item} />
            <p className = 'mediaHeading'><Title item={props.item} type={props.type}/></p>
            <hr/>
            <p id="text"><NonEnglishName item={props.item} type={props.type}/></p>
            <p id="text"><FindYear item={props.item} type = {props.type}/></p>
            <p id="text"><ConvertISO language={props.item.original_language} /></p>
        </div>
    )
}

export default ListItem;