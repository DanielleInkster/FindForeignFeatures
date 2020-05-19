import React, { Component } from 'react';
import ListItem from '../ListItem';

class RecommendationsList extends Component {

    render() {
     
        return (
            <div>
                {console.log(this.props.list)}
                <div> {this.props.list.map(movie =>
                    <li style={{ listStyleType: "none" }} key={movie.id}>
                        <ListItem movie={movie} type = {this.props.type}/>
                        <br /><br />
                    </li>)}
                </div>
            </div>
        )
    }
}
export default RecommendationsList;