import React, { Component } from 'react';
import ListItem from '../ListItem';

class RecommendationsList extends Component {

    render() {
     
        return (
            <div>
                
                <div> {this.props.list.map(movie =>
                    <li style={{ listStyleType: "none" }} key={movie.id}>
                        <ListItem movie={movie} />
                        <br /><br />
                    </li>)}
                </div>
            </div>
        )
    }
}
export default RecommendationsList;