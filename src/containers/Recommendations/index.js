import React, {Component} from 'react';
import Keywords from '../Keywords';

class Recommendations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rawKeywordRecommendations:[],
        }
    }

    rawKeywordHandler = (results) => {
        this.setState({ rawKeywordRecommendations: results });
        console.log(results)
    }

    render(){
        return(
            <Keywords movie = {this.props.movie} isFetching = {this.props.isFetching} rawKeywordHandler ={this.rawKeywordHandler}/>

            
            
        )
    }
}

export default Recommendations;