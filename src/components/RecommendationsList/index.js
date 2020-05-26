import React from 'react';
import RecommendationsListItem from '../RecommendationsListItem';
import './RecommendationsList.css'

const RecommendationsList =(props) => {
        return (
                <div id='column'> {props.list.map(item =>
                    <li style={{ listStyleType: "none" }} key={item.id} className = 'card'>
                        <div className = 'card-content'>
                        <RecommendationsListItem item={item} type = {props.type}/>
                        </div>
                        <br />
                    </li>)}
                </div>
           
        )
    
}
export default RecommendationsList;