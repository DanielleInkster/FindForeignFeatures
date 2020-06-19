import React from 'react';
import ConvertISO from '../ConvertISO';
import ImageUrl from '../ImageUrl';
import Title from '../Title';
import NonEnglishName from '../NonEnglishName';
import FindYear from '../FindYear'


const RecommendationsListItem = (props) => {
    return (
        <div >
            <ImageUrl item={props.item} />
            <p className='mediaHeading'><Title item={props.item} type={props.type} /></p>
            <hr />
            <p id="nonEnglishHeading"><NonEnglishName item={props.item} type={props.type} /></p>
            <p id="text"><FindYear item={props.item} type={props.type} /></p>
            <p id="text"><ConvertISO language={props.item.original_language} /></p>
            <p id="overview">{props.item.overview.length > 0 ? props.item.overview.slice(0,75)+'...':''}</p>
        </div>
    )
}

export default RecommendationsListItem;