import React from 'react';
import ListItem from '../ListItem';
import './RecommendationsList.css'

const RecommendationsList =(props) => {
        return (
                <div id='column'> {props.list.map(item =>
                    <li style={{ listStyleType: "none" }} key={item.id} className = 'card'>
                        <ListItem item={item} type = {props.type}/>
                        <br /><br />
                    </li>)}
                </div>
           
        )
    
}
export default RecommendationsList;