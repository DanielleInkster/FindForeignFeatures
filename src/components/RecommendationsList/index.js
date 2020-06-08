import React from 'react';
import RecommendationsListItem from '../RecommendationsListItem';
import './RecommendationsList.css'

const RecommendationsList =(props) => {
        return (
            <div>
            {console.log(props)}
            <div id='column'> {props.location.recommendations.map(item =>
                    <li style={{ listStyleType: "none" }} key={item.id} className = 'card'>
                        <div className = 'card-content'>
                        <RecommendationsListItem item={item} type = {props.match.params.mediaType}/>
                        </div>
                        <br />
                    </li>)}
                    
                </div>
            </div>
           
        )
    
}
export default RecommendationsList;