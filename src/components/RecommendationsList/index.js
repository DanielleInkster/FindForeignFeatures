import React from 'react';
import ListItem from '../ListItem';

const RecommendationsList =(props) => {
        return (
            <div>
                <div> {props.list.map(item =>
                    <li style={{ listStyleType: "none" }} key={item.id}>
                        <ListItem item={item} type = {props.type}/>
                        <br /><br />
                    </li>)}
                </div>
            </div>
        )
    
}
export default RecommendationsList;