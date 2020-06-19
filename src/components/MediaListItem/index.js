import React from 'react';
import ConvertISO from '../Assets/ConvertISO';
import ImageUrl from '../ImageUrl';
import Title from '../Title';
import FindYear from '../Assets/FindYear'


const MediaListItem =(props)=>{
    return(
        <div >
            <ImageUrl item={props.item} />
            <p className = 'mediaHeading'><Title item={props.item} type={props.type}/></p>
            <hr/>
            <p id="text"><FindYear item={props.item} type = {props.type}/></p>
            <p id="text"><ConvertISO language={props.item.original_language} /></p>
        </div>
    )
}

export default MediaListItem;