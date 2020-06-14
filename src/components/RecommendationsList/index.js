import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import RecommendationsListItem from '../RecommendationsListItem';


const RecommendationsList =(props) => {
    if(props.recommendations.length !== 0){
        return (
            <div>
                <div id='column'> {props.recommendations.map(item =>
                    <li style={{ listStyleType: "none" }} key={item.id} className = 'card'>
                        <div className = 'card-content'>
                        <RecommendationsListItem item={item} type = {props.match.params.mediaType}/>
                        </div>
                        <br />
                    </li>)}  
                </div>
            </div> 
        )
    
    } else {
        return(
            <Redirect to='error/404' />
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        recommendations: state.recommendations
    }
}
export default connect(mapStateToProps, null)(RecommendationsList);