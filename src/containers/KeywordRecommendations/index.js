import React, {Component} from 'react';

class KeywordRecommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywordRecommendations: [],
            keywords: []
        }
    }

    render(){
        return(
           this.props.keywords
        )
    }
}

export default KeywordRecommendations;