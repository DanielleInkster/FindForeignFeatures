import React, {Component} from 'react';
import KeywordRecommendations from '../../containers/KeywordRecommendations';

class Recommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywordRecommendations: [],
            genreRecommendations: [],
        }
    }


    render(){
        return(
            <div> 
                <KeywordRecommendations keywords = {this.props.keywords} />
            </div>
        )
    }
}

export default Recommendations;