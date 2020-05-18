import React, { Component } from 'react';
import ListItem from '../ListItem';

class RecommendationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: true,
        }
    }

    render() {
        const { showing } = this.state;

        return (
            <div>
                {console.log(this.props.list)}
                <div style={{ display: (showing ? 'block' : 'none') }}> {this.props.list.map(movie =>
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